import React from "react";


type MailtoProps =
{
    email: string;
    subject?: string;
    body?: string;
    children: React.ReactNode;
}


export const Mailto: React.FC<MailtoProps> = (props: MailtoProps) =>
{
    const { email, subject, body, children } = props;
    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;

    return (
        <a href={mailToLink}>
            {children}
        </a>
    )
}