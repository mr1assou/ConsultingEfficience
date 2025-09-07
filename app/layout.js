// import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "/public/assets/css/animate.min.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/flaticon.min.css"
import "/public/assets/css/fontawesome-5.14.0.min.css"
import "/public/assets/css/magnific-popup.min.css"
import "/public/assets/css/nice-select.min.css"
import "/public/assets/css/slick.min.css"
import "/public/assets/css/style.css"
import "/public/assets/css/professional-theme.css"

import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'

const playfair = Playfair_Display({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: "--script-font",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['400', '600'],
    subsets: ['latin'],
    variable: "--base-font",
    display: 'swap',
})

export const metadata = {
    title: 'Agincy - Digital Agency Nextjs Template',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${jakarta.variable}`}>{children}</body>
        </html>
    )
}
