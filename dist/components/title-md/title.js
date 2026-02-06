import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function Title({ eyebrow, title, subtitle, align = "left" }) {
    return (_jsxs("div", { className: `title-block title-block--${align}`, children: [eyebrow ? _jsx("span", { className: "title-block__eyebrow", children: eyebrow }) : null, _jsx("h2", { className: "title-block__title", children: title }), subtitle ? _jsx("p", { className: "title-block__subtitle", children: subtitle }) : null] }));
}
