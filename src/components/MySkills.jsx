import LogoLoop from './Logo/LogoLoop';
import { SiReact, SiLaravel, SiPhp, SiBootstrap, SiJquery, SiJavascript, SiMysql, SiHtml5, SiCss, SiUbuntu, SiMariadb, SiGithub, SiGithubcopilot } from 'react-icons/si';

const techLogos = [
    { node: <SiGithub color="#ffffff" />, title: "GitHub", href: "https://github.com" },
    { node: <SiGithubcopilot color="#ffffff" />, title: "GitHub", href: "https://copilot.microsoft.com" },
    { node: <SiPhp color="#777BB4" />, title: "PHP", href: "https://www.php.net" },
    { node: <SiLaravel color="#FF2D20" />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
    { node: <SiJquery color="#0769AD" />, title: "jQuery", href: "https://jquery.com" },
    { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiMysql color="#4479A1" />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiMariadb color="#003545" />, title: "MariaDB", href: "https://mariadb.org" },
    { node: <SiBootstrap color="#7952B3" />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiHtml5 color="#E34F26" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss color="#1572B6" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiUbuntu color="#E95420" />, title: "Ubuntu", href: "https://ubuntu.com" },
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

export const MySkill = () => {
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            {/* Basic horizontal loop */}
            <LogoLoop
                logos={techLogos}
                speed={90}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />

            {/* Vertical loop with deceleration on hover */}
            {/* <LogoLoop
        logos={techLogos}
  useCustomRender={true}
/> */}
        </div>
    );
}