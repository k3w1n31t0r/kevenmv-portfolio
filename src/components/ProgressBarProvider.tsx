

// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import colors from "tailwindcss/colors";
// const Providers = ({ children }: { children: React.ReactNode }) => {
const Providers = () => {
  return (
        <>
            <ProgressBar
                height="16px"
                color={colors.blue[600]}
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default Providers;