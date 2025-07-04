import gsap from "gsap";
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

// Initialisation des animations (tu peux ajouter ici des animations globales si nécessaire)
const initAnimations = () => {
    // Exemple d'animation d'un élément au chargement
    gsap.fromTo(".fadein", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(".fadein1s", { opacity: 0, y: 50, }, { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.fromTo(".fadein2s", { opacity: 0, y: 50, }, { opacity: 1, y: 0, duration: 1, delay: 1 });

};

// Animation de survol d'un bouton
const buttonHoverAnimation = () => {
    class Button {
        constructor(buttonElement) {
            this.block = buttonElement;
            this.init();
            this.initEvents();
        }

        init() {
            const el = gsap.utils.selector(this.block);

            this.DOM = {
                button: this.block,
                flair: el(".button__flair")
            };

            this.xSet = gsap.quickSetter(this.DOM.flair, "xPercent");
            this.ySet = gsap.quickSetter(this.DOM.flair, "yPercent");
        }

        getXY(e) {
            const {
                left,
                top,
                width,
                height
            } = this.DOM.button.getBoundingClientRect();

            const xTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, width, 0, 100),
                gsap.utils.clamp(0, 100)
            );

            const yTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, height, 0, 100),
                gsap.utils.clamp(0, 100)
            );

            return {
                x: xTransformer(e.clientX - left),
                y: yTransformer(e.clientY - top)
            };
        }

        initEvents() {
            this.DOM.button.addEventListener("mouseenter", (e) => {
                const { x, y } = this.getXY(e);

                this.xSet(x);
                this.ySet(y);

                gsap.to(this.DOM.flair, {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });

            this.DOM.button.addEventListener("mouseleave", (e) => {
                const { x, y } = this.getXY(e);

                gsap.killTweensOf(this.DOM.flair);

                gsap.to(this.DOM.flair, {
                    xPercent: x > 0 ? x : x < 10 ? x - 20 : x,
                    yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                    scale: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            this.DOM.button.addEventListener("mousemove", (e) => {
                const { x, y } = this.getXY(e);

                gsap.to(this.DOM.flair, {
                    xPercent: x,
                    yPercent: y,
                    duration: 0.4,
                    ease: "power2"
                });
            });
        }
    }
    gsap.matchMedia().add("(min-width: 1024px)", () => {
        gsap.to(".img-carousel", {
            ease: "none",
            x: () => -(document.querySelector(".img-carousel").scrollWidth - window.innerWidth),
            scrollTrigger: {
                trigger: ".img-carousel",
                pin: true,
                start: "center center",
                end: () => "+=" + (document.querySelector(".img-carousel").scrollWidth - window.innerWidth),
                scrub: 1.5,
                invalidateOnRefresh: true,
                markers: false,
            }
        });
    });

    const buttonElements = document.querySelectorAll('[data-block="button"]');

    buttonElements.forEach((buttonElement) => {
        new Button(buttonElement);
    });
};

const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = ['.background_purple'];

    triggers.forEach(triggerClass => {
        ScrollTrigger.create({

            trigger: triggerClass,
            markers: false,
            start: "top 50%",
            end: "bottom 20%",

            onEnter: () => {
                gsap.to('body', { duration: 1, backgroundColor: '#6E07F3' })
                gsap.to('.second_title_contact', { duration: 1, color: '#6E07F3' })
                gsap.to('.text_contact', { duration: 1, color: '#6E07F3' })
            },

            onEnterBack: () => {
                gsap.to('.second_title_contact', { duration: 1, color: '#6E07F3' })
                gsap.to('.text_contact', { duration: 1, color: '#6E07F3' })
            },

            onLeaveBack: () => {
                gsap.to('body', { duration: 1, backgroundColor: '#ffffff' })
                gsap.to('.second_title_contact', { duration: 1, color: '#ffffff' })
                gsap.to('.text_contact', { duration: 1, color: '#ffffff' })
            },

            onLeave: () => {
                gsap.to('.second_title_contact', { duration: 1, color: '#ffffff' })
                gsap.to('.text_contact', { duration: 1, color: '#ffffff' })
            },
        });
    });

    ScrollTrigger.create({

        trigger: ".background_portfolio",
        markers: false,
        start: "top 50%",
        end: "bottom 20%",

        onEnter: () => {
            gsap.to('body', { duration: 1, backgroundColor: '#6E07F3' })
        },

        onEnterBack: () => {
            gsap.to('body', { duration: 1, backgroundColor: '#6E07F3' })
        },

        onLeaveBack: () => {
            gsap.to('body', { duration: 1, backgroundColor: '#ffffff' })
        },

        onLeave: () => {
            gsap.to('body', { duration: 1, backgroundColor: '#ffffff' })
        },
    });

    ScrollTrigger.create({

        trigger: '.background_contact',
        markers: false,
        start: "top 50%",
        end: "bottom 20%",

        onEnterBack: () => {
            gsap.to('body', { duration: 1, backgroundColor: '#6E07F3' })
        },

        onLeave: () => {
            gsap.to('body', { duration: 1, backgroundColor: '#ffffff' });
        },
    });

    ScrollTrigger.create({

        trigger: '.About',
        markers: false,
        start: "top 50%",
        end: "bottom 20%",

        onEnter: () => {
            gsap.to(".About", { opacity: 1, y: -50 });
        },

        onEnterBack: () => {
            gsap.to(".About", { opacity: 1, y: -50 });
        },

        onLeaveBack: () => {
            gsap.to(".About", { opacity: 0, y: 50 });
        },

        onLeave: () => {
            gsap.to(".About", { opacity: 0, y: 50 });
        },
    });

    ScrollTrigger.create({

        trigger: '.contact_form',
        markers: false,
        start: "top 50%",
        end: "bottom 20%",

        onEnter: () => {
            gsap.to(".contact_form", { opacity: 1, y: -50 });
        },

        onEnterBack: () => {
            gsap.to(".contact_form", { opacity: 1, y: -50 });
        },

        onLeaveBack: () => {
            gsap.to(".contact_form", { opacity: 0, y: 50 });
        },

        onLeave: () => {
            gsap.to(".contact_form", { opacity: 0, y: 50 });
        },
    });

    ScrollTrigger.refresh();
}

// Fonction principale pour initialiser toutes les animations
const runAnimations = () => {
    initAnimations();
    buttonHoverAnimation();
    scrollAnimation();
};

// Exportation de la fonction pour qu'elle puisse être appelée dans ton fichier principal
export { runAnimations };