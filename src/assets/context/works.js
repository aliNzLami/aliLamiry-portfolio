import dashboard from '../pics/dashboard.webp';
import dashboard_mobile from '../pics/dash_mobile.webp';
import shop from '../pics/shop.webp';
import shop_mobile from '../pics/shop_,mobile.webp'
import note from '../pics/note.webp';
import note_mobile from '../pics/note_mobile.webp';

export const worksList = [
    {
        title: "Fullstack Banking Dashboard Panel",
        description: 'Banking web application to add bank accounts, make transactions, and view data analysis by charts.',
        stack: "TypeScript, Next.js, React.js, Redux Toolkit, TailwindCSS, Shadcn, Chart.js, Plaid API, AppWrite Backend",
        github: "https://github.com/aliNzLami/light_banking",
        live: "https://lightbanking.netlify.app/",
        pic: dashboard,
        mobile_pic: dashboard_mobile,
    },
    {
        title: "Video Game Online Shopping",
        description: 'Responsive e-commerce platform enhancing user experience through seamless product browsing and purchasing workflows.',
        stack: "React.js, Context API, React Router Dom, TailwindCSS, Video.js, React Testing Library, gsap",
        github: "https://github.com/aliNzLami/gameShop",
        live: "https://alinzlami.github.io/gameShop/#/",
        pic: shop,
        mobile_pic: shop_mobile,
    },
    {
        title: "Multilingual Transaction Webpage",
        description: 'Multilingual, offline-first landing page inspired by i18n, featuring a 3D notebook interface with flip-page functionality.',
        stack: "Vanilla JS, Modular Pattern, Offline Translation, Sass, Bootstrap, Three.js, Webpack, Cypress",
        github: "https://github.com/aliNzLami/dreamNote",
        live: "https://alinzlami.github.io/dreamNote/",
        pic: note,
        mobile_pic: note_mobile,
    },
]