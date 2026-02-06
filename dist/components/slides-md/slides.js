import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Title } from "../title-md/title.js";

const services = [
    {
        title: "Профгигиена и чистка",
        text: "Удаляем налет и камень, полируем эмаль, подбираем домашний уход."
    },
    {
        title: "Пломбирование",
        text: "Лечение под микроскопом, точный цвет, восстановление формы зуба."
    },
    {
        title: "Отбеливание",
        text: "Деликатно осветляем эмаль на 2-6 тонов за один визит."
    },
    {
        title: "Диагностика 3D",
        text: "Снимок и подробный план лечения в день обращения."
    },
    {
        title: "Имплантация",
        text: "Современные системы, при необходимости - установка за 1 день."
    },
    {
        title: "Детская стоматология",
        text: "Мягкая адаптация, лечение во сне и забота о маленьких пациентах."
    }
];
const reasons = [
    {
        label: "Опыт",
        value: "12 лет",
        text: "Врачи с узкой специализацией и регулярным повышением квалификации."
    },
    {
        label: "Сертификаты",
        value: "ISO + лицензия",
        text: "Работаем официально, используем сертифицированные материалы."
    },
    {
        label: "Отзывы",
        value: "4.9/5",
        text: "Пациенты рекомендуют нас за аккуратность и понятные планы лечения."
    }
];
const reviews = [
    {
        name: "Мария К.",
        text: "Очень боялась лечить зуб, но здесь все сделали спокойно и быстро. Врач объяснил каждый шаг.",
        meta: "Пломбирование, ноябрь"
    },
    {
        name: "Дмитрий С.",
        text: "Чистка прошла идеально - впервые без дискомфорта. Записался на отбеливание.",
        meta: "Профгигиена, декабрь"
    },
    {
        name: "Алина Р.",
        text: "Сыну 7 лет, приняли без слез. Очень понравилась детская зона и отношение врача.",
        meta: "Детский прием, январь"
    }
];
export function Slides() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("idle");
    const isLoading = status === "loading";
    const isError = status === "error";
    const isLocalHost = typeof window !== "undefined" &&
        (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
    const submitLead = async (payload) => {
        if (isLocalHost) {
            return fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
        }
        const formBody = new URLSearchParams({
            "form-name": "appointment",
            name: payload.name,
            phone: payload.phone
        }).toString();
        return fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name.trim() || !phone.trim()) {
            setStatus("error");
            return;
        }
        try {
            setStatus("loading");
            const response = await submitLead({ name: name.trim(), phone: phone.trim() });
            if (!response.ok) {
                throw new Error("Request failed");
            }
            setName("");
            setPhone("");
            setStatus("success");
        }
        catch (error) {
            setStatus("error");
        }
    };
    return (_jsxs("main", { className: "slides", children: [_jsx("section", { id: "hero", className: "slide hero", children: _jsxs("div", { className: "container hero__grid", children: [_jsxs("div", { className: "hero__content", children: [_jsx("span", { className: "pill", children: "\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u044F Smile" }), _jsxs("h1", { className: "hero__title", children: ["\u0417\u0434\u043E\u0440\u043E\u0432\u0430\u044F \u0443\u043B\u044B\u0431\u043A\u0430", _jsx("span", { children: "\u0437\u0430 1 \u0432\u0438\u0437\u0438\u0442" })] }), _jsx("p", { className: "hero__subtitle", children: "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u0431\u043E\u0442\u0430 \u043E \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430\u0445. \u0411\u0435\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0435\u0439, \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C\u044E \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C \u043A \u043A\u0430\u0436\u0434\u043E\u0439 \u0434\u0435\u0442\u0430\u043B\u0438." }), _jsxs("div", { className: "hero__actions", children: [_jsx("a", { className: "btn btn--solid", href: "#cta", children: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u0435\u043C" }), _jsx("a", { className: "btn btn--ghost", href: "#services", children: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438" })] }), _jsxs("div", { className: "hero__stats", children: [_jsxs("div", { children: [_jsx("strong", { children: "7 200+" }), _jsx("span", { children: "\u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B\u0445 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432" })] }), _jsxs("div", { children: [_jsx("strong", { children: "24/7" }), _jsx("span", { children: "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u043E\u0441\u043B\u0435 \u0432\u0438\u0437\u0438\u0442\u0430" })] }), _jsxs("div", { children: [_jsx("strong", { children: "45 \u043C\u0438\u043D" }), _jsx("span", { children: "\u0441\u0440\u0435\u0434\u043D\u0435\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u0435" })] })] })] }), _jsxs("div", { className: "hero__visual", children: [_jsxs("div", { className: "hero__card hero__card--top", children: [_jsx("span", { children: "\u041E\u043D\u043B\u0430\u0439\u043D-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F" }), _jsx("strong", { children: "15 \u043C\u0438\u043D\u0443\u0442" })] }), _jsxs("div", { className: "hero__card hero__card--mid", children: [_jsx("span", { children: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u044B" }), _jsx("strong", { children: "\u0434\u043E 3 \u043B\u0435\u0442" })] }), _jsxs("div", { className: "hero__card hero__card--bottom", children: [_jsx("span", { children: "\u0422\u043E\u0447\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430" }), _jsx("strong", { children: "3D-\u0441\u043D\u0438\u043C\u043E\u043A" })] }), _jsx("div", { className: "hero__shape" })] })] }) }), _jsx("section", { id: "problem", className: "slide problem", children: _jsxs("div", { className: "container problem__grid", children: [_jsx("div", { className: "problem__text", children: _jsx(Title, { eyebrow: "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430", title: "\u0411\u043E\u043B\u0438\u0442 \u0437\u0443\u0431? \u041D\u0435 \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0439\u0442\u0435 \u0432\u0438\u0437\u0438\u0442", subtitle: "\u0427\u0435\u043C \u0440\u0430\u043D\u044C\u0448\u0435 \u043D\u0430\u0447\u0430\u0442\u044C \u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0442\u0435\u043C \u043F\u0440\u043E\u0449\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435 \u043E\u043D\u043E \u043F\u0440\u043E\u0439\u0434\u0435\u0442. \u041C\u044B \u0443\u0431\u0435\u0440\u0435\u043C \u0431\u043E\u043B\u044C \u0438 \u0432\u0435\u0440\u043D\u0435\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0443\u0436\u0435 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u0440\u0438\u0435\u043C\u0435." }) }), _jsxs("div", { className: "problem__card", children: [_jsx("h3", { children: "\u0427\u0442\u043E \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442" }), _jsxs("ul", { children: [_jsx("li", { children: "\u041E\u0441\u0442\u0440\u0430\u044F \u0438\u043B\u0438 \u0442\u044F\u043D\u0443\u0449\u0430\u044F \u0431\u043E\u043B\u044C" }), _jsx("li", { children: "\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u043C\u0443 \u0438 \u0433\u043E\u0440\u044F\u0447\u0435\u043C\u0443" }), _jsx("li", { children: "\u041A\u0430\u0440\u0438\u0435\u0441 \u0438 \u0441\u043A\u043E\u043B\u044B \u044D\u043C\u0430\u043B\u0438" }), _jsx("li", { children: "\u0414\u0438\u0441\u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u043F\u043E\u0441\u043B\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u044F" })] })] })] }) }), _jsx("section", { id: "services", className: "slide services", children: _jsxs("div", { className: "container", children: [_jsx(Title, { eyebrow: "\u0423\u0441\u043B\u0443\u0433\u0438", title: "\u0427\u0438\u0441\u0442\u043A\u0430, \u043F\u043B\u043E\u043C\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u043E\u0442\u0431\u0435\u043B\u0438\u0432\u0430\u043D\u0438\u0435", subtitle: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435 - \u043E\u0442 \u043F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u043A\u0438 \u0434\u043E \u0441\u043B\u043E\u0436\u043D\u043E\u0433\u043E \u043B\u0435\u0447\u0435\u043D\u0438\u044F." }), _jsx("div", { className: "cards-grid", children: services.map((service, index) => (_jsxs("article", { className: "card reveal", style: { "--delay": `${0.1 + index * 0.08}s` }, children: [_jsx("h3", { children: service.title }), _jsx("p", { children: service.text })] }, service.title))) })] }) }), _jsx("section", { id: "why", className: "slide why", children: _jsxs("div", { className: "container", children: [_jsx(Title, { eyebrow: "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B", title: "\u0414\u043E\u0432\u0435\u0440\u0438\u0435, \u043E\u043F\u044B\u0442, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B", subtitle: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B, \u043E\u043F\u044B\u0442 \u0432\u0440\u0430\u0447\u0435\u0439 \u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B - \u043E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430\u0448\u0435\u0439 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0438." }), _jsx("div", { className: "why__grid", children: reasons.map((reason) => (_jsxs("article", { className: "why__card", children: [_jsx("span", { className: "why__label", children: reason.label }), _jsx("strong", { children: reason.value }), _jsx("p", { children: reason.text })] }, reason.label))) }), _jsxs("div", { className: "why__strip", children: [_jsxs("div", { children: [_jsx("strong", { children: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0432\u0440\u0430\u0447\u0438" }), _jsx("span", { children: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u044F\u0445." })] }), _jsxs("div", { children: [_jsx("strong", { children: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435" }), _jsx("span", { children: "\u041C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F, 3D-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u043C\u044F\u0433\u043A\u0430\u044F \u0430\u043D\u0435\u0441\u0442\u0435\u0437\u0438\u044F." })] }), _jsxs("div", { children: [_jsx("strong", { children: "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C" }), _jsx("span", { children: "\u0421\u043C\u0435\u0442\u0430 \u0438 \u043F\u043B\u0430\u043D \u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442." })] })] })] }) }), _jsx("section", { id: "reviews", className: "slide reviews", children: _jsxs("div", { className: "container", children: [_jsx(Title, { eyebrow: "\u041E\u0442\u0437\u044B\u0432\u044B", title: "\u041F\u0430\u0446\u0438\u0435\u043D\u0442\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u043A \u043D\u0430\u043C \u0441\u043D\u043E\u0432\u0430", subtitle: "\u041D\u0438\u0436\u0435 - \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043B\u044B\u0448\u0438\u043C \u043F\u043E\u0447\u0442\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C.", align: "center" }), _jsx("div", { className: "reviews__grid", children: reviews.map((review) => (_jsxs("article", { className: "review", children: [_jsxs("p", { children: ["\"", review.text, "\""] }), _jsxs("div", { className: "review__meta", children: [_jsx("strong", { children: review.name }), _jsx("span", { children: review.meta })] })] }, review.name))) })] }) }), _jsx("section", { id: "cta", className: "slide cta", children: _jsxs("div", { className: "container cta__grid", children: [_jsxs("div", { className: "cta__content", children: [_jsx(Title, { eyebrow: "\u0417\u0430\u043F\u0438\u0441\u044C", title: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 - \u043C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442", subtitle: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043F\u043E\u0434\u0431\u0435\u0440\u0435\u0442 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u0442 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B." }), _jsxs("div", { className: "cta__notes", children: [_jsx("span", { children: "\u0411\u0435\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0435\u0439" }), _jsx("span", { children: "\u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0430\u044F \u0430\u043D\u0435\u0441\u0442\u0435\u0437\u0438\u044F" }), _jsx("span", { children: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u044B" })] })] }), _jsxs("form", { className: "cta__form", name: "appointment", method: "POST", "data-netlify": "true", "data-netlify-honeypot": "bot-field", onSubmit: handleSubmit, "aria-busy": isLoading, children: [_jsx("input", { type: "hidden", name: "form-name", value: "appointment" }), _jsxs("label", { style: { display: "none" }, children: ["\u041D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C", _jsx("input", { name: "bot-field" })] }), _jsxs("label", { children: ["\u0418\u043C\u044F", _jsx("input", { type: "text", name: "name", placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0410\u043D\u043D\u0430", value: name, onChange: (event) => setName(event.target.value), autoComplete: "name", "aria-invalid": isError, "aria-describedby": "cta-status", required: true })] }), _jsxs("label", { children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D", _jsx("input", { type: "tel", name: "phone", placeholder: "+7 (___) ___-__-__", value: phone, onChange: (event) => setPhone(event.target.value), inputMode: "tel", autoComplete: "tel", "aria-invalid": isError, "aria-describedby": "cta-status", required: true })] }), _jsx("button", { className: "btn btn--solid", type: "submit", disabled: isLoading, children: isLoading ? "Отправляем..." : "Отправить заявку" }), _jsxs("p", { id: "cta-status", className: `form-status form-status--${status}`, role: "status", "aria-live": "polite", children: [status === "success" && "Спасибо! Мы уже готовим для вас удобное время.", status === "error" && "Пожалуйста, заполните оба поля или попробуйте позже.", status === "idle" && "Нажимая кнопку, вы соглашаетесь с политикой обработки данных."] })] })] }) }), _jsx("footer", { className: "footer", children: _jsxs("div", { className: "container footer__inner", children: [_jsxs("div", { children: [_jsx("strong", { children: "Smile" }), _jsx("span", { children: "\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u044F \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430" })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E 09:00-21:00" }), _jsx("span", { children: "\u0443\u043B. \u041F\u0440\u0438\u043C\u0435\u0440\u043D\u0430\u044F, 12" })] }), _jsxs("div", { children: [_jsx("span", { children: "+7 (495) 000-00-00" }), _jsx("span", { children: "hello@smile-clinic.ru" })] })] }) })] }));
}
