<?php
header("Access-Control-Allow-Origin: https://devkeven.com");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=utf-8");

// Manejo del método OPTIONS para preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Clave secreta generada por Google (debes colocar la tuya aquí)
$recaptcha_secret = getenv('NEXT_PRIVATE_RECAPTCHA_SITE_KEY');

// Asegúrate de que sea POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name    = htmlspecialchars($data['name']);
    $email   = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($data['message']);
    $token   = $data['token_verify'] ?? '';

    // Verifica que los campos estén completos
    if (!$name || !$email || !$message || !$token) {
        echo json_encode(['status' => 'error', 'message' => 'php_all_fields']);
        exit;
    }

    // Verificar el token de reCAPTCHA
    $verify_response = file_get_contents(
        'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($recaptcha_secret) . '&response=' . urlencode($token)
    );
    $response_data = json_decode($verify_response);

    if (!$response_data->success || $response_data->score < 0.5) {
        // El token es inválido o la puntuación es baja (probablemente spam)
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'php_repatcha']);
        exit;
    }

    // Si todo está bien, procesa tu formulario (ej. enviar correo)
    $to      = 'contact@devkeven.com';
    $subject = 'Nuevo mensaje desde formulario de contacto';
    $body    = "Nombre: $name \n Email: $email \n Mensaje: $message";
    $headers = "From: noreply@devkeven.com\r\n";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' => 'php_success']);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'php_error']);
    }
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'php_method']);
}
