import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("aduan/dashboard","routes/aduan/dashboard.tsx"),
    route("aduan/borang-aduan","routes/aduan/borangAduan.tsx")
] satisfies RouteConfig;
