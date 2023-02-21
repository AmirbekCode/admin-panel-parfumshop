"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,197];
exports.modules = {

/***/ 9787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/utils/create-emotion-cache.js

const createEmotionCache = ()=>{
    return cache_default()({
        key: 'css'
    });
};


/***/ }),

/***/ 5193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const themeConfig = {
    // ** Layout Configs
    templateName: 'Zamon Parfum' /* App Name */ ,
    mode: 'light' /* light | dark */ ,
    contentWidth: 'boxed' /* full | boxed */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    menuTextTruncate: true,
    navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeConfig);


/***/ }),

/***/ 767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/configs/themeConfig.js
var themeConfig = __webpack_require__(5193);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "mdi-material-ui/ArrowUp"
const ArrowUp_namespaceObject = require("mdi-material-ui/ArrowUp");
var ArrowUp_default = /*#__PURE__*/__webpack_require__.n(ArrowUp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/appBar/index.js

// ** MUI Imports



const AppBar = (0,styles_.styled)((AppBar_default()))(({ theme  })=>({
        transition: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 6),
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    })
);
const Toolbar = (0,styles_.styled)((Toolbar_default()))(({ theme  })=>({
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: `${theme.spacing(0)} !important`,
        minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
        transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
    })
);
const LayoutAppBar = (props)=>{
    // ** Props
    const { settings , verticalAppBarContent: userVerticalAppBarContent  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppBar, {
        elevation: 0,
        color: "default",
        className: "layout-navbar",
        position: "static",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Toolbar, {
            className: "navbar-content-container",
            sx: {
                ...contentWidth === 'boxed' && {
                    '@media (min-width:1440px)': {
                        maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
                    }
                }
            },
            children: userVerticalAppBarContent && userVerticalAppBarContent(props) || null
        })
    }));
};
/* harmony default export */ const appBar = (LayoutAppBar);

;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "react-perfect-scrollbar"
const external_react_perfect_scrollbar_namespaceObject = require("react-perfect-scrollbar");
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/SwipeableDrawer"
const SwipeableDrawer_namespaceObject = require("@mui/material/SwipeableDrawer");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/Drawer.js

// ** MUI Imports


const SwipeableDrawer = (0,styles_.styled)((SwipeableDrawer_default()))({
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out',
    '& ul': {
        listStyle: 'none'
    },
    '& .MuiListItem-gutters': {
        paddingLeft: 4,
        paddingRight: 4
    },
    '& .MuiDrawer-paper': {
        left: 'unset',
        right: 'unset',
        overflowX: 'hidden',
        transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
    }
});
const Drawer = (props)=>{
    // ** Props
    const { hidden , children , navWidth , navVisible , setNavVisible  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // Drawer Props for Mobile & Tablet screens
    const MobileDrawerProps = {
        open: navVisible,
        onOpen: ()=>setNavVisible(true)
        ,
        onClose: ()=>setNavVisible(false)
        ,
        ModalProps: {
            keepMounted: true // Better open performance on mobile.
        }
    };
    // Drawer Props for Desktop screens
    const DesktopDrawerProps = {
        open: true,
        onOpen: ()=>null
        ,
        onClose: ()=>null
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(SwipeableDrawer, {
        className: "layout-vertical-nav",
        variant: hidden ? 'temporary' : 'permanent',
        ...hidden ? {
            ...MobileDrawerProps
        } : {
            ...DesktopDrawerProps
        },
        PaperProps: {
            sx: {
                width: navWidth
            }
        },
        sx: {
            width: navWidth,
            '& .MuiDrawer-paper': {
                borderRight: 0,
                backgroundColor: theme.palette.background.default
            }
        },
        children: children
    }));
};
/* harmony default export */ const navigation_Drawer = (Drawer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "@mui/material/Chip"
const Chip_namespaceObject = require("@mui/material/Chip");
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: ./src/layouts/components/UserIcon.js

const UserIcon = (props)=>{
    // ** Props
    const { icon , iconProps  } = props;
    const IconTag = icon;
    let styles;
    /* styles = {
      color: 'red',
      fontSize: '2rem'
    } */ // @ts-ignore
    return(/*#__PURE__*/ jsx_runtime_.jsx(IconTag, {
        ...iconProps,
        style: {
            ...styles
        }
    }));
};
/* harmony default export */ const components_UserIcon = (UserIcon);

;// CONCATENATED MODULE: ./src/@core/layouts/utils.js
/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */ const handleURLQueries = (router, path)=>{
    if (Object.keys(router.query).length && path) {
        const arr = Object.keys(router.query);
        return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]]) && path !== '/';
    }
    return false;
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavLink.js

// ** Next Imports


// ** MUI Imports







// ** Configs Import

// ** Custom Components Imports

// ** Utils

// ** Styled Components
const MenuNavLink = (0,styles_.styled)((ListItemButton_default()))(({ theme  })=>({
        width: '100%',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        color: theme.palette.text.primary,
        padding: theme.spacing(2.25, 3.5),
        transition: 'opacity .25s ease-in-out',
        '&.active, &.active:hover': {
            boxShadow: theme.shadows[3],
            backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
        },
        '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
            color: `${theme.palette.common.white} !important`
        }
    })
);
const MenuItemTextMetaWrapper = (0,styles_.styled)((Box_default()))({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'opacity .25s ease-in-out',
    ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
        overflow: 'hidden'
    }
});
const VerticalNavLink = ({ item , navVisible , toggleNavVisibility  })=>{
    // ** Hooks
    const router = (0,router_.useRouter)();
    const IconTag = item.icon;
    const isNavLinkActive = ()=>{
        if (router.pathname === item.path || handleURLQueries(router, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
        disablePadding: true,
        className: "nav-link",
        disabled: item.disabled || false,
        sx: {
            mt: 1.5,
            px: '0 !important'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            passHref: true,
            href: item.path === undefined ? '/' : `${item.path}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuNavLink, {
                component: 'a',
                className: isNavLinkActive() ? 'active' : '',
                ...item.openInNewTab ? {
                    target: '_blank'
                } : null,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (navVisible) {
                        toggleNavVisibility();
                    }
                },
                sx: {
                    pl: 5.5,
                    ...item.disabled ? {
                        pointerEvents: 'none'
                    } : {
                        cursor: 'pointer'
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                        sx: {
                            mr: 2.5,
                            color: 'text.primary',
                            transition: 'margin .25s ease-in-out'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                            icon: IconTag
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextMetaWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
                                    noWrap: true
                                },
                                children: item.title
                            }),
                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item.badgeContent,
                                color: item.badgeColor || 'primary',
                                sx: {
                                    height: 20,
                                    fontWeight: 500,
                                    marginLeft: 1.25,
                                    '& .MuiChip-label': {
                                        px: 1.5,
                                        textTransform: 'capitalize'
                                    }
                                }
                            }) : null
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavLink = (VerticalNavLink);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: external "@mui/material/ListSubheader"
const ListSubheader_namespaceObject = require("@mui/material/ListSubheader");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavSectionTitle.js

// ** MUI Imports




// ** Styled Components
const ListSubheader = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
        component: "li",
        ...props
    })
)(({ theme  })=>({
        lineHeight: 1,
        display: 'flex',
        position: 'relative',
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(2),
        backgroundColor: 'transparent',
        transition: 'padding-left .25s ease-in-out'
    })
);
const TypographyHeaderText = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontSize: '0.75rem',
        lineHeight: 'normal',
        letterSpacing: '0.21px',
        textTransform: 'uppercase',
        color: theme.palette.text.disabled,
        fontWeight: theme.typography.fontWeightMedium
    })
);
const VerticalNavSectionTitle = (props)=>{
    // ** Props
    const { item  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(ListSubheader, {
        className: "nav-section-title",
        sx: {
            px: 0,
            py: 1.75,
            color: theme.palette.text.disabled,
            '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
                borderColor: `rgba(${theme.palette.customColors.main}, 0.12)`
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
            textAlign: "left",
            sx: {
                m: 0,
                width: '100%',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                '&:before, &:after': {
                    top: 7,
                    transform: 'none'
                },
                '& .MuiDivider-wrapper': {
                    px: 2.5,
                    fontSize: '0.75rem',
                    letterSpacing: '0.21px'
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(TypographyHeaderText, {
                noWrap: true,
                children: item.sectionTitle
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavSectionTitle = (VerticalNavSectionTitle);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavItems.js


// ** Custom Menu Components


const resolveNavItemComponent = (item)=>{
    if (item.sectionTitle) return navigation_VerticalNavSectionTitle;
    return navigation_VerticalNavLink;
};
const VerticalNavItems = (props)=>{
    // ** Props
    const { verticalNavItems  } = props;
    const RenderMenuItems = verticalNavItems === null || verticalNavItems === void 0 ? void 0 : verticalNavItems.map((item, index)=>{
        const TagName = resolveNavItemComponent(item);
        return(/*#__PURE__*/ (0,external_react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        }));
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    }));
};
/* harmony default export */ const navigation_VerticalNavItems = (VerticalNavItems);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavHeader.js

// ** Next Import

// ** MUI Imports



// ** Configs

// ** Styled Components
const MenuHeaderWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: theme.spacing(4.5),
        transition: 'padding .25s ease-in-out',
        minHeight: theme.mixins.toolbar.minHeight
    })
);
const HeaderTitle = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        lineHeight: 'normal',
        textTransform: 'uppercase',
        color: theme.palette.text.primary,
        transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
    })
);
const StyledLink = (0,styles_.styled)('a')({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
});
const VerticalNavHeader = (props)=>{
    // ** Props
    const { verticalNavMenuBranding: userVerticalNavMenuBranding  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(MenuHeaderWrapper, {
        className: "nav-header",
        sx: {
            pl: 6
        },
        children: userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledLink, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: 30,
                        height: 25,
                        version: "1.1",
                        viewBox: "0 0 30 23",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                id: "Artboard",
                                transform: "translate(-95.000000, -51.000000)",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                    id: "logo",
                                    transform: "translate(95.000000, 50.000000)",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            id: "Combined-Shape",
                                            fill: theme.palette.primary.main,
                                            d: "M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            id: "Rectangle",
                                            opacity: "0.077704",
                                            fill: theme.palette.common.black,
                                            points: "0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            id: "Rectangle",
                                            opacity: "0.077704",
                                            fill: theme.palette.common.black,
                                            points: "0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            id: "Rectangle",
                                            opacity: "0.077704",
                                            fill: theme.palette.common.black,
                                            points: "22.7419355 8.58870968 30 12.7417372 30 16.9537453",
                                            transform: "translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            id: "Rectangle",
                                            opacity: "0.077704",
                                            fill: theme.palette.common.black,
                                            points: "22.7419355 8.58870968 30 12.6409734 30 15.2601969",
                                            transform: "translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            id: "Rectangle",
                                            fillOpacity: "0.15",
                                            fill: theme.palette.common.white,
                                            d: "M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            id: "Rectangle",
                                            fillOpacity: "0.35",
                                            fill: theme.palette.common.white,
                                            transform: "translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) ",
                                            d: "M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderTitle, {
                        variant: "h6",
                        sx: {
                            ml: 3
                        },
                        children: themeConfig/* default.templateName */.Z.templateName
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavHeader = (VerticalNavHeader);

// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.js
var hex_to_rgba = __webpack_require__(1946);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/index.js

// ** React Import

// ** MUI Import



// ** Third Party Components

// ** Component Imports



// ** Util Import

const StyledBoxForShadow = (0,styles_.styled)((Box_default()))({
    top: 50,
    left: -8,
    zIndex: 2,
    height: 75,
    display: 'none',
    position: 'absolute',
    pointerEvents: 'none',
    width: 'calc(100% + 15px)',
    '&.d-block': {
        display: 'block'
    }
});
const Navigation = (props)=>{
    // ** Props
    const { hidden , afterVerticalNavMenuContent , beforeVerticalNavMenuContent , verticalNavMenuContent: userVerticalNavMenuContent  } = props;
    // ** States
    const { 0: groupActive , 1: setGroupActive  } = (0,external_react_.useState)([]);
    const { 0: currentActiveGroup , 1: setCurrentActiveGroup  } = (0,external_react_.useState)([]);
    // ** Ref
    const shadowRef = (0,external_react_.useRef)(null);
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Fixes Navigation InfiniteScroll
    const handleInfiniteScroll = (ref)=>{
        if (ref) {
            // @ts-ignore
            ref._getBoundingClientRect = ref.getBoundingClientRect;
            ref.getBoundingClientRect = ()=>{
                // @ts-ignore
                const original = ref._getBoundingClientRect();
                return {
                    ...original,
                    height: Math.floor(original.height)
                };
            };
        }
    };
    // ** Scroll Menu
    const scrollMenu = (container)=>{
        container = hidden ? container.target : container;
        if (shadowRef && container.scrollTop > 0) {
            // @ts-ignore
            if (!shadowRef.current.classList.contains('d-block')) {
                // @ts-ignore
                shadowRef.current.classList.add('d-block');
            }
        } else {
            // @ts-ignore
            shadowRef.current.classList.remove('d-block');
        }
    };
    const ScrollWrapper = hidden ? (Box_default()) : (external_react_perfect_scrollbar_default());
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(navigation_Drawer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavHeader, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxForShadow, {
                ref: shadowRef,
                sx: {
                    background: `linear-gradient(${theme.palette.background.default} 40%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.1)} 95%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.05)})`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollWrapper, {
                    containerRef: (ref)=>handleInfiniteScroll(ref)
                    ,
                    ...hidden ? {
                        onScroll: (container)=>scrollMenu(container)
                        ,
                        sx: {
                            height: '100%',
                            overflowY: 'auto',
                            overflowX: 'hidden'
                        }
                    } : {
                        options: {
                            wheelPropagation: false
                        },
                        onScrollY: (container)=>scrollMenu(container)
                    },
                    children: [
                        beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            },
                            children: userVerticalNavMenuContent ? userVerticalNavMenuContent(props) : /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                className: "nav-items",
                                sx: {
                                    transition: 'padding .25s ease',
                                    pr: 4.5
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                                    groupActive: groupActive,
                                    setGroupActive: setGroupActive,
                                    currentActiveGroup: currentActiveGroup,
                                    setCurrentActiveGroup: setCurrentActiveGroup,
                                    ...props
                                })
                            })
                        })
                    ]
                })
            }),
            afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null
        ]
    }));
};
/* harmony default export */ const navigation = (Navigation);

// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/FooterContent.js

// ** MUI Imports




const FooterContent = ()=>{
    // ** Var
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down('md')
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
            sx: {
                mr: 2
            },
            children: [
                `© ${new Date().getFullYear()}, Made with `,
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        color: 'error.main'
                    },
                    children: "❤️"
                }),
                ` by `,
                /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                    target: "_blank",
                    href: "https://github.com/AmirbekCode/admin-panel-parfumshop",
                    children: "AmirbekDEV"
                })
            ]
        })
    }));
};
/* harmony default export */ const footer_FooterContent = (FooterContent);

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/index.js

// ** MUI Imports


// ** Footer Content Component

const Footer = (props)=>{
    // ** Props
    const { settings , footerContent: userFooterContent  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return(/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "footer",
        className: "layout-footer",
        sx: {
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            className: "footer-content-container",
            sx: {
                width: '100%',
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                padding: theme.spacing(4, 6),
                ...contentWidth === 'boxed' && {
                    '@media (min-width:1440px)': {
                        maxWidth: 1440
                    }
                }
            },
            children: userFooterContent ? userFooterContent(props) : /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterContent, {
            })
        })
    }));
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/components/scroll-to-top/index.js

// ** MUI Imports



const ScrollToTopStyled = (0,styles_.styled)('div')(({ theme  })=>({
        zIndex: 11,
        position: 'fixed',
        right: theme.spacing(6),
        bottom: theme.spacing(10)
    })
);
const ScrollToTop = (props)=>{
    // ** Props
    const { children , className  } = props;
    // ** init trigger
    const trigger = useScrollTrigger_default()({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector('body');
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((Zoom_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        })
    }));
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

// EXTERNAL MODULE: ./src/@core/styles/libs/react-datepicker/index.js
var react_datepicker = __webpack_require__(8745);
;// CONCATENATED MODULE: ./src/@core/layouts/VerticalLayout.js

// ** React Imports

// ** MUI Imports



// ** Icons Imports

// ** Theme Config Import

// ** Components




// ** Styled Component

const VerticalLayoutWrapper = (0,styles_.styled)('div')({
    height: '100%',
    display: 'flex'
});
const MainContentWrapper = (0,styles_.styled)((Box_default()))({
    flexGrow: 1,
    minWidth: 0,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
});
const ContentWrapper = (0,styles_.styled)('main')(({ theme  })=>({
        flexGrow: 1,
        width: '100%',
        padding: theme.spacing(6),
        transition: 'padding .25s ease-in-out',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    })
);
const VerticalLayout = (props)=>{
    // ** Props
    const { settings , children , scrollToTop  } = props;
    // ** Vars
    const { contentWidth  } = settings;
    const navWidth = themeConfig/* default.navigationSize */.Z.navigationSize;
    // ** States
    const { 0: navVisible , 1: setNavVisible  } = (0,external_react_.useState)(false);
    // ** Toggle Functions
    const toggleNavVisibility = ()=>setNavVisible(!navVisible)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(VerticalLayoutWrapper, {
                className: "layout-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navigation, {
                        navWidth: navWidth,
                        navVisible: navVisible,
                        setNavVisible: setNavVisible,
                        toggleNavVisibility: toggleNavVisibility,
                        ...props
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContentWrapper, {
                        className: "layout-content-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(appBar, {
                                toggleNavVisibility: toggleNavVisibility,
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContentWrapper, {
                                className: "layout-page-content",
                                sx: {
                                    ...contentWidth === 'boxed' && {
                                        mx: 'auto',
                                        '@media (min-width:1440px)': {
                                            maxWidth: 1440
                                        },
                                        '@media (min-width:1200px)': {
                                            maxWidth: '100%'
                                        }
                                    }
                                },
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker/* default */.Z, {
                                sx: {
                                    zIndex: 11
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    id: "react-datepicker-portal"
                                })
                            })
                        ]
                    })
                ]
            }),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowUp_default()), {
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const layouts_VerticalLayout = (VerticalLayout);

;// CONCATENATED MODULE: external "mdi-material-ui/Login"
const Login_namespaceObject = require("mdi-material-ui/Login");
var Login_default = /*#__PURE__*/__webpack_require__.n(Login_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/Table"
const Table_namespaceObject = require("mdi-material-ui/Table");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/CubeOutline"
const CubeOutline_namespaceObject = require("mdi-material-ui/CubeOutline");
var CubeOutline_default = /*#__PURE__*/__webpack_require__.n(CubeOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/HomeOutline"
const HomeOutline_namespaceObject = require("mdi-material-ui/HomeOutline");
var HomeOutline_default = /*#__PURE__*/__webpack_require__.n(HomeOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/FormatLetterCase"
const FormatLetterCase_namespaceObject = require("mdi-material-ui/FormatLetterCase");
var FormatLetterCase_default = /*#__PURE__*/__webpack_require__.n(FormatLetterCase_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/AccountCogOutline"
var AccountCogOutline_ = __webpack_require__(2542);
var AccountCogOutline_default = /*#__PURE__*/__webpack_require__.n(AccountCogOutline_);
;// CONCATENATED MODULE: external "mdi-material-ui/CreditCardOutline"
const CreditCardOutline_namespaceObject = require("mdi-material-ui/CreditCardOutline");
var CreditCardOutline_default = /*#__PURE__*/__webpack_require__.n(CreditCardOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/AccountPlusOutline"
const AccountPlusOutline_namespaceObject = require("mdi-material-ui/AccountPlusOutline");
var AccountPlusOutline_default = /*#__PURE__*/__webpack_require__.n(AccountPlusOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/AlertCircleOutline"
const AlertCircleOutline_namespaceObject = require("mdi-material-ui/AlertCircleOutline");
var AlertCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AlertCircleOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/GoogleCirclesExtended"
const GoogleCirclesExtended_namespaceObject = require("mdi-material-ui/GoogleCirclesExtended");
var GoogleCirclesExtended_default = /*#__PURE__*/__webpack_require__.n(GoogleCirclesExtended_namespaceObject);
;// CONCATENATED MODULE: ./src/navigation/vertical/index.js
// ** Icon imports










const vertical_navigation = ()=>{
    return [
        {
            title: 'Dashboard',
            icon: (HomeOutline_default()),
            path: '/'
        },
        {
            title: 'Buyurtmalar',
            icon: (Table_default()),
            path: '/tables'
        },
        {
            title: 'Account Sozlamasi',
            icon: (AccountCogOutline_default()),
            path: '/account-settings'
        },
        {
            sectionTitle: 'Pages'
        },
        {
            title: 'Login',
            icon: (Login_default()),
            path: '/pages/login',
            openInNewTab: true
        },
        {
            title: 'Registratsiya',
            icon: (AccountPlusOutline_default()),
            path: '/pages/register',
            openInNewTab: true
        },
        {
            title: 'Error',
            icon: (AlertCircleOutline_default()),
            path: '/pages/error',
            openInNewTab: true
        },
        {
            sectionTitle: 'User Interface'
        },
        {
            title: 'Typography',
            icon: (FormatLetterCase_default()),
            path: '/typography'
        },
        {
            title: 'Icons',
            path: '/icons',
            icon: (GoogleCirclesExtended_default())
        },
        {
            title: 'Cards',
            icon: (CreditCardOutline_default()),
            path: '/cards'
        },
        {
            icon: (CubeOutline_default()),
            title: 'Form Layouts',
            path: '/form-layouts'
        }
    ];
};
/* harmony default export */ const vertical = (vertical_navigation);

;// CONCATENATED MODULE: external "@mui/material/Fade"
const Fade_namespaceObject = require("@mui/material/Fade");
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
;// CONCATENATED MODULE: external "react-popper"
const external_react_popper_namespaceObject = require("react-popper");
;// CONCATENATED MODULE: ./src/layouts/components/UpgradeToProButton.js

// ** React Import

// ** MUI Imports






// ** Third Party Imports

const BuyNowButton = ()=>{
    // ** States
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: popperElement , 1: setPopperElement  } = (0,external_react_.useState)(null);
    const { 0: referenceElement , 1: setReferenceElement  } = (0,external_react_.useState)(null);
    const { styles , attributes , update  } = (0,external_react_popper_namespaceObject.usePopper)(referenceElement, popperElement, {
        placement: 'top-end'
    });
    const handleOpen = ()=>{
        setOpen(true);
        update ? update() : null;
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
};
/* harmony default export */ const UpgradeToProButton = (BuyNowButton);

// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
;// CONCATENATED MODULE: external "mdi-material-ui/Menu"
const Menu_namespaceObject = require("mdi-material-ui/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/Magnify"
const Magnify_namespaceObject = require("mdi-material-ui/Magnify");
var Magnify_default = /*#__PURE__*/__webpack_require__.n(Magnify_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherNight"
const WeatherNight_namespaceObject = require("mdi-material-ui/WeatherNight");
var WeatherNight_default = /*#__PURE__*/__webpack_require__.n(WeatherNight_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherSunny"
const WeatherSunny_namespaceObject = require("mdi-material-ui/WeatherSunny");
var WeatherSunny_default = /*#__PURE__*/__webpack_require__.n(WeatherSunny_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/ModeToggler.js


// ** Icons Imports


const ModeToggler = (props)=>{
    // ** Props
    const { settings , saveSettings  } = props;
    const handleModeChange = (mode)=>{
        saveSettings({
            ...settings,
            mode
        });
    };
    const handleModeToggle = ()=>{
        if (settings.mode === 'light') {
            handleModeChange('dark');
        } else {
            handleModeChange('light');
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        color: "inherit",
        "aria-haspopup": "true",
        onClick: handleModeToggle,
        children: settings.mode === 'dark' ? /*#__PURE__*/ jsx_runtime_.jsx((WeatherSunny_default()), {
        }) : /*#__PURE__*/ jsx_runtime_.jsx((WeatherNight_default()), {
        })
    }));
};
/* harmony default export */ const shared_components_ModeToggler = (ModeToggler);

// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var material_Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
;// CONCATENATED MODULE: external "@mui/material/Badge"
const Badge_namespaceObject = require("@mui/material/Badge");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
;// CONCATENATED MODULE: external "mdi-material-ui/CogOutline"
const CogOutline_namespaceObject = require("mdi-material-ui/CogOutline");
var CogOutline_default = /*#__PURE__*/__webpack_require__.n(CogOutline_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/CurrencyUsd"
var CurrencyUsd_ = __webpack_require__(5890);
var CurrencyUsd_default = /*#__PURE__*/__webpack_require__.n(CurrencyUsd_);
// EXTERNAL MODULE: external "mdi-material-ui/EmailOutline"
var EmailOutline_ = __webpack_require__(754);
var EmailOutline_default = /*#__PURE__*/__webpack_require__.n(EmailOutline_);
;// CONCATENATED MODULE: external "mdi-material-ui/LogoutVariant"
const LogoutVariant_namespaceObject = require("mdi-material-ui/LogoutVariant");
var LogoutVariant_default = /*#__PURE__*/__webpack_require__.n(LogoutVariant_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/AccountOutline"
var AccountOutline_ = __webpack_require__(7143);
var AccountOutline_default = /*#__PURE__*/__webpack_require__.n(AccountOutline_);
// EXTERNAL MODULE: external "mdi-material-ui/MessageOutline"
var MessageOutline_ = __webpack_require__(6384);
var MessageOutline_default = /*#__PURE__*/__webpack_require__.n(MessageOutline_);
// EXTERNAL MODULE: external "mdi-material-ui/HelpCircleOutline"
var HelpCircleOutline_ = __webpack_require__(5442);
var HelpCircleOutline_default = /*#__PURE__*/__webpack_require__.n(HelpCircleOutline_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/UserDropdown.js

// ** React Imports

// ** Next Import

// ** MUI Imports








// ** Icons Imports







// ** Styled Components
const BadgeContentSpan = (0,styles_.styled)('span')(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    })
);
const UserDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    // ** Hooks
    const router = (0,router_.useRouter)();
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = (url)=>{
        if (url) {
            router.push(url);
        }
        setAnchorEl(null);
    };
    const styles = {
        py: 2,
        px: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        textDecoration: 'none',
        '& svg': {
            fontSize: '1.375rem',
            color: 'text.secondary'
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                overlap: "circular",
                onClick: handleDropdownOpen,
                sx: {
                    ml: 2,
                    cursor: 'pointer'
                },
                badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {
                }),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    alt: "John Doe",
                    onClick: handleDropdownOpen,
                    sx: {
                        width: 40,
                        height: 40
                    },
                    src: "/images/avatars/1.png"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Menu_default()), {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: ()=>handleDropdownClose()
                ,
                sx: {
                    '& .MuiMenu-paper': {
                        width: 230,
                        marginTop: 4
                    }
                },
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            pt: 2,
                            pb: 3,
                            px: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                    overlap: "circular",
                                    badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {
                                    }),
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        alt: "John Doe",
                                        src: "/images/avatars/1.png",
                                        sx: {
                                            width: '2.5rem',
                                            height: '2.5rem'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: 'flex',
                                        marginLeft: 3,
                                        alignItems: 'flex-start',
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: "John Doe"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontSize: '0.8rem',
                                                color: 'text.disabled'
                                            },
                                            children: "Admin"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            mt: 0,
                            mb: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((AccountOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Profile"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((EmailOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Inbox"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((MessageOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Chat"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CogOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Settings"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CurrencyUsd_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Pricing"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((HelpCircleOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "FAQ"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        sx: {
                            py: 2
                        },
                        onClick: ()=>handleDropdownClose('/pages/login')
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((LogoutVariant_default()), {
                                sx: {
                                    marginRight: 2,
                                    fontSize: '1.375rem',
                                    color: 'text.secondary'
                                }
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_UserDropdown = (UserDropdown);

;// CONCATENATED MODULE: external "mdi-material-ui/BellOutline"
const BellOutline_namespaceObject = require("mdi-material-ui/BellOutline");
var BellOutline_default = /*#__PURE__*/__webpack_require__.n(BellOutline_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/NotificationDropdown.js

// ** React Imports

// ** MUI Imports










// ** Icons Imports

// ** Third Party Components

// ** Styled Menu component
const Menu = (0,styles_.styled)((material_Menu_default()))(({ theme  })=>({
        '& .MuiMenu-paper': {
            width: 380,
            overflow: 'hidden',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        '& .MuiMenu-list': {
            padding: 0
        }
    })
);
// ** Styled MenuItem component
const MenuItem = (0,styles_.styled)((MenuItem_default()))(({ theme  })=>({
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`
    })
);
const styles = {
    maxHeight: 349,
    '& .MuiMenuItem-root:last-of-type': {
        border: 0
    }
};
// ** Styled PerfectScrollbar component
const PerfectScrollbar = (0,styles_.styled)((external_react_perfect_scrollbar_default()))({
    ...styles
});
// ** Styled Avatar component
const Avatar = (0,styles_.styled)((Avatar_default()))({
    width: '2.375rem',
    height: '2.375rem',
    fontSize: '1.125rem'
});
// ** Styled component for the title in MenuItems
const MenuItemTitle = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        flex: '1 1 100%',
        overflow: 'hidden',
        fontSize: '0.875rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginBottom: theme.spacing(0.75)
    })
);
// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = (0,styles_.styled)((Typography_default()))({
    flex: '1 1 100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
});
const NotificationDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    // ** Hook
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down('lg')
    );
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = ()=>{
        setAnchorEl(null);
    };
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return(/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    ...styles,
                    overflowY: 'auto',
                    overflowX: 'hidden'
                },
                children: children
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime_.jsx(PerfectScrollbar, {
                options: {
                    wheelPropagation: false,
                    suppressScrollX: true
                },
                children: children
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                color: "inherit",
                "aria-haspopup": "true",
                onClick: handleDropdownOpen,
                "aria-controls": "customized-menu",
                children: /*#__PURE__*/ jsx_runtime_.jsx((BellOutline_default()), {
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleDropdownClose,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                        disableRipple: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Notifications"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                    size: "small",
                                    label: "8 New",
                                    color: "primary",
                                    sx: {
                                        height: 20,
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        borderRadius: '10px'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                            alt: "Flora",
                                            src: "/images/avatars/4.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemTitle, {
                                                    children: "Congratulation Flora! 🎉"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Won the monthly best seller badge"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Today"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                            sx: {
                                                color: 'common.white',
                                                backgroundColor: 'primary.main'
                                            },
                                            children: "VU"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemTitle, {
                                                    children: "New user registered."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "5 hours ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Yesterday"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                            alt: "message",
                                            src: "/images/avatars/5.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemTitle, {
                                                    children: "New message received 👋🏻"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "You have 10 unread messages"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "11 Aug"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "paypal",
                                            src: "/images/misc/paypal.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemTitle, {
                                                    children: "Paypal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Received Payment"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "25 May"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                            alt: "order",
                                            src: "/images/avatars/3.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemTitle, {
                                                    children: "Revised Order 📦"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "New order revised from john"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "19 Mar"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "chart",
                                            src: "/images/misc/chart.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemTitle, {
                                                    children: "Finance report has been generated"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "25 hrs ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "27 Dec"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                        disableRipple: true,
                        sx: {
                            py: 3.5,
                            borderBottom: 0,
                            borderTop: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            fullWidth: true,
                            variant: "contained",
                            onClick: handleDropdownClose,
                            children: "Read All Notifications"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_NotificationDropdown = (NotificationDropdown);

;// CONCATENATED MODULE: ./src/layouts/components/vertical/AppBarContent.js

// ** MUI Imports





// ** Icons Imports


// ** Components



const AppBarContent = (props)=>{
    // ** Props
    const { hidden , settings , saveSettings , toggleNavVisibility  } = props;
    // ** Hook
    const hiddenSm = useMediaQuery_default()((theme)=>theme.breakpoints.down('sm')
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "actions-left",
                sx: {
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        color: "inherit",
                        onClick: toggleNavVisibility,
                        sx: {
                            ml: -2.75,
                            ...hiddenSm ? {
                            } : {
                                mr: 3.5
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                        })
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        size: "small",
                        sx: {
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 4
                            }
                        },
                        InputProps: {
                            startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                position: "start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Magnify_default()), {
                                    fontSize: "small"
                                })
                            })
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "actions-right",
                sx: {
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_ModeToggler, {
                        settings: settings,
                        saveSettings: saveSettings
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_NotificationDropdown, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_UserDropdown, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const vertical_AppBarContent = (AppBarContent);

;// CONCATENATED MODULE: ./src/@core/context/settingsContext.js

// ** React Imports

// ** ThemeConfig Import

const initialSettings = {
    themeColor: 'primary',
    mode: themeConfig/* default.mode */.Z.mode,
    contentWidth: themeConfig/* default.contentWidth */.Z.contentWidth
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,external_react_.createContext)({
    saveSettings: ()=>null
    ,
    settings: initialSettings
});
const SettingsProvider = ({ children  })=>{
    // ** State
    const { 0: settings , 1: setSettings  } = (0,external_react_.useState)({
        ...initialSettings
    });
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    }));
};
const SettingsConsumer = SettingsContext.Consumer;

;// CONCATENATED MODULE: ./src/@core/hooks/useSettings.js


const useSettings = ()=>(0,external_react_.useContext)(SettingsContext)
;

;// CONCATENATED MODULE: ./src/layouts/UserLayout.js

// ** MUI Imports


// ** Layout Imports
// !Do not remove this Layout import

// ** Navigation Imports

// ** Component Import


// ** Hook Import

const UserLayout = ({ children  })=>{
    // ** Hooks
    const { settings , saveSettings  } = useSettings();
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down('lg')
    );
    const UpgradeToProImg = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts_VerticalLayout, {
        hidden: hidden,
        settings: settings,
        saveSettings: saveSettings,
        verticalNavItems: vertical(),
        afterVerticalNavMenuContent: UpgradeToProImg,
        verticalAppBarContent: (props // AppBar Content
        )=>/*#__PURE__*/ jsx_runtime_.jsx(vertical_AppBarContent, {
                hidden: hidden,
                settings: settings,
                saveSettings: saveSettings,
                toggleNavVisibility: props.toggleNavVisibility
            })
        ,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(UpgradeToProButton, {
            })
        ]
    }));
};
/* harmony default export */ const layouts_UserLayout = (UserLayout);

;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/GlobalStyles"
const GlobalStyles_namespaceObject = require("@mui/material/GlobalStyles");
var GlobalStyles_default = /*#__PURE__*/__webpack_require__.n(GlobalStyles_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/theme/overrides/card.js
const Card = (theme)=>{
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[6],
                    '& .card-more-options': {
                        marginTop: theme.spacing(-1),
                        marginRight: theme.spacing(-3)
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root': {
                        paddingTop: 0
                    },
                    '& .MuiCardHeader-subheader': {
                        fontSize: '0.875rem'
                    }
                },
                title: {
                    lineHeight: 1,
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    letterSpacing: '0.0125em'
                },
                action: {
                    marginTop: 0,
                    marginRight: 0
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiCardContent-root': {
                        paddingTop: 0
                    },
                    '&:last-of-type': {
                        paddingBottom: theme.spacing(5)
                    },
                    '& + .MuiCardActions-root': {
                        paddingTop: 0
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '&.card-action-dense': {
                        padding: theme.spacing(0, 2.5, 2.5),
                        '.MuiCard-root .MuiCardMedia-root + &': {
                            paddingTop: theme.spacing(2.5)
                        },
                        '.MuiCard-root &:first-of-type': {
                            paddingTop: theme.spacing(5),
                            paddingBottom: theme.spacing(5),
                            '& + .MuiCardContent-root': {
                                paddingTop: 0
                            },
                            '& + .MuiCardHeader-root': {
                                paddingTop: 0
                            }
                        }
                    },
                    '& .MuiButton-text': {
                        paddingLeft: theme.spacing(2.5),
                        paddingRight: theme.spacing(2.5)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/chip.js
const Chip = (theme)=>{
    return {
        MuiChip: {
            styleOverrides: {
                outlined: {
                    '&.MuiChip-colorDefault': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                },
                deleteIcon: {
                    width: 18,
                    height: 18
                }
            }
        }
    };
};
/* harmony default export */ const overrides_chip = (Chip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/link.js
/* harmony default export */ const overrides_link = ({
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: 'none'
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/list.js
const List = (theme)=>{
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(2.25),
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(4)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                dense: {
                    '& .MuiListItemText-primary': {
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const overrides_list = (List);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/menu.js
const menu_Menu = (theme)=>{
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    '& .MuiMenu-paper': {
                        borderRadius: 5,
                        boxShadow: theme.palette.mode === 'light' ? theme.shadows[8] : theme.shadows[9]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_menu = (menu_Menu);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tabs.js
const Tabs = (theme)=>{
    return {
        MuiTabs: {
            styleOverrides: {
                vertical: {
                    minWidth: 130,
                    marginRight: theme.spacing(4),
                    borderRight: `1px solid ${theme.palette.divider}`,
                    '& .MuiTab-root': {
                        minWidth: 130
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                textColorSecondary: {
                    '&.Mui-selected': {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tabs = (Tabs);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/input.js
const input = (theme)=>{
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&.Mui-disabled:before': {
                        borderBottom: `1px solid ${theme.palette.text.disabled}`
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
                    '&:hover:not(.Mui-disabled)': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.error.main
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.disabled
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_input = (input);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/paper.js
/* harmony default export */ const paper = ({
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none'
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/table.js
const Table = (theme)=>{
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    '& .MuiTableCell-head': {
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.13px'
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-body': {
                        letterSpacing: '0.25px',
                        color: theme.palette.text.secondary,
                        '&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)': {
                            paddingTop: theme.spacing(3.5),
                            paddingBottom: theme.spacing(3.5)
                        }
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ': {
                        paddingLeft: theme.spacing(5)
                    },
                    '& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child': {
                        paddingRight: theme.spacing(5)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    '& .MuiButton-root': {
                        textTransform: 'uppercase',
                        color: theme.palette.text.secondary
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                }
            }
        }
    };
};
/* harmony default export */ const table = (Table);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/alerts.js

// ** Util Import

const Alert = (theme)=>{
    const getColor = theme.palette.mode === 'light' ? styles_.darken : styles_.lighten;
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    '& .MuiAlertTitle-root': {
                        marginBottom: theme.spacing(1.6)
                    },
                    '& a': {
                        color: 'inherit',
                        fontWeight: 500
                    }
                },
                standardSuccess: {
                    color: getColor(theme.palette.success.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                standardInfo: {
                    color: getColor(theme.palette.info.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                standardWarning: {
                    color: getColor(theme.palette.warning.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                standardError: {
                    color: getColor(theme.palette.error.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: getColor(theme.palette.success.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: getColor(theme.palette.info.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: getColor(theme.palette.warning.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: getColor(theme.palette.error.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                filled: {
                    fontWeight: 400
                }
            }
        }
    };
};
/* harmony default export */ const overrides_alerts = (Alert);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/button.js
// ** Theme Config Imports

const Button = (theme)=>{
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 5,
                    lineHeight: 1.71,
                    letterSpacing: '0.3px',
                    padding: `${theme.spacing(1.875, 3)}`
                },
                contained: {
                    boxShadow: theme.shadows[3],
                    padding: `${theme.spacing(1.875, 5.5)}`
                },
                outlined: {
                    padding: `${theme.spacing(1.625, 5.25)}`
                },
                sizeSmall: {
                    padding: `${theme.spacing(1, 2.25)}`,
                    '&.MuiButton-contained': {
                        padding: `${theme.spacing(1, 3.5)}`
                    },
                    '&.MuiButton-outlined': {
                        padding: `${theme.spacing(0.75, 3.25)}`
                    }
                },
                sizeLarge: {
                    padding: `${theme.spacing(2.125, 5.5)}`,
                    '&.MuiButton-contained': {
                        padding: `${theme.spacing(2.125, 6.5)}`
                    },
                    '&.MuiButton-outlined': {
                        padding: `${theme.spacing(1.875, 6.25)}`
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: themeConfig/* default.disableRipple */.Z.disableRipple
            }
        }
    };
};
/* harmony default export */ const overrides_button = (Button);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dialog.js
// ** Util Import

const Dialog = (theme)=>{
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[6],
                    '&:not(.MuiDialog-paperFullScreen)': {
                        '@media (max-width:599px)': {
                            margin: theme.spacing(4),
                            width: `calc(100% - ${theme.spacing(8)})`,
                            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
                        }
                    },
                    '& > .MuiList-root': {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1)
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiDialogContent-root': {
                        paddingTop: 0
                    },
                    '& + .MuiDialogActions-root': {
                        paddingTop: 0
                    },
                    // Styling for Mobile Date Picker starts
                    '& .PrivatePickersToolbar-root': {
                        padding: theme.spacing(4, 5),
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.main,
                        '& .MuiTypography-root': {
                            color: theme.palette.primary.contrastText
                        },
                        '& span.MuiTypography-overline': {
                            fontSize: '1rem',
                            lineHeight: '24px',
                            letterSpacing: '0.15px'
                        },
                        '& ~ div[class^="css-"] > div[class^="css-"]': {
                            marginTop: theme.spacing(6),
                            marginBottom: theme.spacing(6),
                            '& > div[class^="css-"]': {
                                backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
                                '& ~ .MuiIconButton-root span.MuiTypography-caption': {
                                    color: 'inherit'
                                }
                            }
                        },
                        '& .PrivateTimePickerToolbar-hourMinuteLabel': {
                            alignItems: 'center',
                            '& > .MuiButton-root span.MuiTypography-root': {
                                fontWeight: 300,
                                lineHeight: '72px',
                                fontSize: '3.75rem',
                                letterSpacing: '-0.5px'
                            },
                            '& > .MuiTypography-root': {
                                color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54),
                                '& + .MuiButton-root > span.MuiTypography-root': {
                                    color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                                }
                            }
                        },
                        '& .PrivateTimePickerToolbar-ampmSelection span.MuiTypography-root:not(.Mui-selected)': {
                            color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                        }
                    }
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '&.dialog-actions-dense': {
                        padding: theme.spacing(2.5),
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dialog = (Dialog);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/rating.js
const Rating = (theme)=>{
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    color: theme.palette.warning.main
                }
            }
        }
    };
};
/* harmony default export */ const overrides_rating = (Rating);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/select.js
/* harmony default export */ const overrides_select = ({
    MuiSelect: {
        styleOverrides: {
            select: {
                minWidth: '6rem !important',
                '&.MuiTablePagination-select': {
                    minWidth: '1rem !important'
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/avatars.js
const avatars_Avatar = (theme)=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
                },
                rounded: {
                    borderRadius: 5
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    justifyContent: 'flex-end',
                    '.MuiCard-root & .MuiAvatar-root': {
                        borderColor: theme.palette.background.paper
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_avatars = (avatars_Avatar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/divider.js
const Divider = (theme)=>{
    return {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: `${theme.spacing(2)} 0`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_divider = (Divider);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/popover.js
const Popover = (theme)=>{
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    '& .MuiPopover-paper': {
                        boxShadow: theme.shadows[6]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_popover = (Popover);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tooltip.js
// ** Util Import

const Tooltip = (theme)=>{
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.mode === 'light' ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                },
                arrow: {
                    color: theme.palette.mode === 'light' ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/backdrop.js
// ** Util Import

const Backdrop = (theme)=>{
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === 'light' ? `rgba(${theme.palette.customColors.main}, 0.7)` : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.7)
                },
                invisible: {
                    backgroundColor: 'transparent'
                }
            }
        }
    };
};
/* harmony default export */ const overrides_backdrop = (Backdrop);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/snackbar.js
const Snackbar = (theme)=>{
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[100]
                }
            }
        }
    };
};
/* harmony default export */ const overrides_snackbar = (Snackbar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/switches.js
const Switch = (theme)=>{
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    '& .MuiSwitch-track': {
                        backgroundColor: `rgb(${theme.palette.customColors.main})`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_switches = (Switch);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/timeline.js
// ** Util Import

const Timeline = (theme)=>{
    return {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    '&:not(:last-of-type)': {
                        '& .MuiTimelineContent-root': {
                            marginBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                filledPrimary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)}`
                },
                filledSecondary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12)}`
                },
                filledSuccess: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12)}`
                },
                filledError: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12)}`
                },
                filledWarning: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12)}`
                },
                filledInfo: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12)}`
                },
                filledGrey: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[400], 0.12)}`
                },
                outlinedPrimary: {
                    '& svg': {
                        color: theme.palette.primary.main
                    }
                },
                outlinedSecondary: {
                    '& svg': {
                        color: theme.palette.secondary.main
                    }
                },
                outlinedSuccess: {
                    '& svg': {
                        color: theme.palette.success.main
                    }
                },
                outlinedError: {
                    '& svg': {
                        color: theme.palette.error.main
                    }
                },
                outlinedWarning: {
                    '& svg': {
                        color: theme.palette.warning.main
                    }
                },
                outlinedInfo: {
                    '& svg': {
                        color: theme.palette.info.main
                    }
                },
                outlinedGrey: {
                    '& svg': {
                        color: theme.palette.grey[500]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_timeline = (Timeline);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/accordion.js
const Accordion = (theme)=>{
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    },
                    '&.Mui-expanded': {
                        boxShadow: theme.shadows[3]
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: `0 ${theme.spacing(5)}`,
                    '& + .MuiCollapse-root': {
                        '& .MuiAccordionDetails-root:first-child': {
                            paddingTop: 0
                        }
                    }
                },
                content: {
                    margin: `${theme.spacing(2.5)} 0`
                },
                expandIconWrapper: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiAccordionDetails-root': {
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_accordion = (Accordion);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/pagination.js
// ** Util Import

const Pagination = (theme)=>{
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    }
                },
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    '&.Mui-selected': {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.2)} !important`
                        }
                    }
                },
                outlinedSecondary: {
                    '&.Mui-selected': {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.2)} !important`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_pagination = (Pagination);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/typography.js
const Typography = (theme)=>{
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: theme.spacing(2)
                }
            }
        }
    };
};
/* harmony default export */ const typography = (Typography);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/toggleButton.js
/* harmony default export */ const toggleButton = ({
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dateTimePicker.js
const DateTimePicker = (theme)=>{
    return {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    '& [role="presentation"]': {
                        fontWeight: 400,
                        '& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div': {
                            marginRight: 0
                        },
                        '& .MuiIconButton-sizeSmall': {
                            padding: theme.spacing(0.5)
                        },
                        '& + div .MuiIconButton-root:not(.Mui-disabled)': {
                            color: theme.palette.text.secondary
                        }
                    },
                    '& .PrivatePickersSlideTransition-root': {
                        minHeight: 240
                    }
                }
            }
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem'
                }
            }
        },
        MuiClockPicker: {
            styleOverrides: {
                arrowSwitcher: {
                    '& .MuiIconButton-root:not(.Mui-disabled)': {
                        color: theme.palette.text.secondary
                    },
                    '& + div': {
                        '& > div': {
                            backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
                            '& ~ .MuiIconButton-root span.MuiTypography-caption': {
                                color: 'inherit'
                            }
                        }
                    }
                }
            }
        },
        MuiMonthPicker: {
            styleOverrides: {
                root: {
                    '& > .MuiTypography-root.Mui-selected': {
                        fontSize: '1rem'
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dateTimePicker = (DateTimePicker);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/index.js
// ** Overrides Imports



























const Overrides = (theme)=>{
    const chip = overrides_chip(theme);
    const list = overrides_list(theme);
    const menu = overrides_menu(theme);
    const tabs = overrides_tabs(theme);
    const cards = card(theme);
    const input = overrides_input(theme);
    const tables = table(theme);
    const alerts = overrides_alerts(theme);
    const button = overrides_button(theme);
    const rating = overrides_rating(theme);
    const avatars = overrides_avatars(theme);
    const divider = overrides_divider(theme);
    const dialog = overrides_dialog(theme);
    const popover = overrides_popover(theme);
    const tooltip = overrides_tooltip(theme);
    const backdrop = overrides_backdrop(theme);
    const snackbar = overrides_snackbar(theme);
    const switches = overrides_switches(theme);
    const timeline = overrides_timeline(theme);
    const accordion = overrides_accordion(theme);
    const pagination = overrides_pagination(theme);
    const dateTimePicker = overrides_dateTimePicker(theme);
    return Object.assign(chip, list, menu, tabs, cards, input, alerts, button, dialog, rating, tables, avatars, divider, overrides_link, popover, tooltip, backdrop, paper, snackbar, switches, timeline, accordion, overrides_select, pagination, typography, dateTimePicker, toggleButton);
};
/* harmony default export */ const overrides = (Overrides);

;// CONCATENATED MODULE: ./src/@core/theme/typography/index.js
const typography_Typography = (theme)=>{
    return {
        h1: {
            fontWeight: 500,
            letterSpacing: '-1.5px',
            color: theme.palette.text.primary
        },
        h2: {
            fontWeight: 500,
            letterSpacing: '-0.5px',
            color: theme.palette.text.primary
        },
        h3: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h4: {
            fontWeight: 500,
            letterSpacing: '0.25px',
            color: theme.palette.text.primary
        },
        h5: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h6: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        subtitle1: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        subtitle2: {
            letterSpacing: '0.1px',
            color: theme.palette.text.secondary
        },
        body1: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        body2: {
            lineHeight: 1.5,
            letterSpacing: '0.15px',
            color: theme.palette.text.secondary
        },
        button: {
            letterSpacing: '0.3px',
            color: theme.palette.text.primary
        },
        caption: {
            letterSpacing: '0.4px',
            color: theme.palette.text.secondary
        },
        overline: {
            letterSpacing: '1px',
            color: theme.palette.text.secondary
        }
    };
};
/* harmony default export */ const theme_typography = (typography_Typography);

;// CONCATENATED MODULE: external "@mui/utils"
const external_mui_utils_namespaceObject = require("@mui/utils");
;// CONCATENATED MODULE: ./src/@core/theme/palette/index.js
const DefaultPalette = (mode, themeColor)=>{
    // ** Vars
    const lightColor = '58, 53, 65';
    const darkColor = '231, 227, 252';
    const mainColor = mode === 'light' ? lightColor : darkColor;
    const primaryGradient = ()=>{
        if (themeColor === 'primary') {
            return '#C6A7FE';
        } else if (themeColor === 'secondary') {
            return '#9C9FA4';
        } else if (themeColor === 'success') {
            return '#93DD5C';
        } else if (themeColor === 'error') {
            return '#FF8C90';
        } else if (themeColor === 'warning') {
            return '#FFCF5C';
        } else {
            return '#6ACDFF';
        }
    };
    return {
        customColors: {
            main: mainColor,
            primaryGradient: primaryGradient(),
            tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
        },
        common: {
            black: '#000',
            white: '#FFF'
        },
        mode: mode,
        primary: {
            light: '#9E69FD',
            main: '#9155FD',
            dark: '#804BDF',
            contrastText: '#FFF'
        },
        secondary: {
            light: '#9C9FA4',
            main: '#8A8D93',
            dark: '#777B82',
            contrastText: '#FFF'
        },
        success: {
            light: '#6AD01F',
            main: '#56CA00',
            dark: '#4CB200',
            contrastText: '#FFF'
        },
        error: {
            light: '#FF6166',
            main: '#FF4C51',
            dark: '#E04347',
            contrastText: '#FFF'
        },
        warning: {
            light: '#FFCA64',
            main: '#FFB400',
            dark: '#E09E00',
            contrastText: '#FFF'
        },
        info: {
            light: '#32BAFF',
            main: '#16B1FF',
            dark: '#139CE0',
            contrastText: '#FFF'
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#D5D5D5',
            A200: '#AAAAAA',
            A400: '#616161',
            A700: '#303030'
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === 'light' ? '#FFF' : '#312D4B',
            default: mode === 'light' ? '#F4F5FA' : '#28243D'
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.18)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    };
};
/* harmony default export */ const palette = (DefaultPalette);

;// CONCATENATED MODULE: ./src/@core/theme/spacing/index.js
/* harmony default export */ const spacing = ({
    spacing: (factor)=>`${0.25 * factor}rem`
});

;// CONCATENATED MODULE: ./src/@core/theme/shadows/index.js
const Shadows = (mode)=>{
    if (mode === 'light') {
        return [
            'none',
            '0px 2px 1px -1px rgba(58, 53, 65, 0.2), 0px 1px 1px 0px rgba(58, 53, 65, 0.14), 0px 1px 3px 0px rgba(58, 53, 65, 0.12)',
            '0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px 0px rgba(58, 53, 65, 0.14), 0px 1px 5px 0px rgba(58, 53, 65, 0.12)',
            '0px 4px 8px -4px rgba(58, 53, 65, 0.42)',
            '0px 6px 18px -8px rgba(58, 53, 65, 0.56)',
            '0px 3px 5px -1px rgba(58, 53, 65, 0.2), 0px 5px 8px 0px rgba(58, 53, 65, 0.14), 0px 1px 14px 0px rgba(58, 53, 65, 0.12)',
            '0px 2px 10px 0px rgba(58, 53, 65, 0.1)',
            '0px 4px 5px -2px rgba(58, 53, 65, 0.2), 0px 7px 10px 1px rgba(58, 53, 65, 0.14), 0px 2px 16px 1px rgba(58, 53, 65, 0.12)',
            '0px 5px 5px -3px rgba(58, 53, 65, 0.2), 0px 8px 10px 1px rgba(58, 53, 65, 0.14), 0px 3px 14px 2px rgba(58, 53, 65, 0.12)',
            '0px 5px 6px -3px rgba(58, 53, 65, 0.2), 0px 9px 12px 1px rgba(58, 53, 65, 0.14), 0px 3px 16px 2px rgba(58, 53, 65, 0.12)',
            '0px 6px 6px -3px rgba(58, 53, 65, 0.2), 0px 10px 14px 1px rgba(58, 53, 65, 0.14), 0px 4px 18px 3px rgba(58, 53, 65, 0.12)',
            '0px 6px 7px -4px rgba(58, 53, 65, 0.2), 0px 11px 15px 1px rgba(58, 53, 65, 0.14), 0px 4px 20px 3px rgba(58, 53, 65, 0.12)',
            '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 12px 17px 2px rgba(58, 53, 65, 0.14), 0px 5px 22px 4px rgba(58, 53, 65, 0.12)',
            '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 13px 19px 2px rgba(58, 53, 65, 0.14), 0px 5px 24px 4px rgba(58, 53, 65, 0.12)',
            '0px 7px 9px -4px rgba(58, 53, 65, 0.2), 0px 14px 21px 2px rgba(58, 53, 65, 0.14), 0px 5px 26px 4px rgba(58, 53, 65, 0.12)',
            '0px 8px 9px -5px rgba(58, 53, 65, 0.2), 0px 15px 22px 2px rgba(58, 53, 65, 0.14), 0px 6px 28px 5px rgba(58, 53, 65, 0.12)',
            '0px 8px 10px -5px rgba(58, 53, 65, 0.2), 0px 16px 24px 2px rgba(58, 53, 65, 0.14), 0px 6px 30px 5px rgba(58, 53, 65, 0.12)',
            '0px 8px 11px -5px rgba(58, 53, 65, 0.2), 0px 17px 26px 2px rgba(58, 53, 65, 0.14), 0px 6px 32px 5px rgba(58, 53, 65, 0.12)',
            '0px 9px 11px -5px rgba(58, 53, 65, 0.2), 0px 18px 28px 2px rgba(58, 53, 65, 0.14), 0px 7px 34px 6px rgba(58, 53, 65, 0.12)',
            '0px 9px 12px -6px rgba(58, 53, 65, 0.2), 0px 19px 29px 2px rgba(58, 53, 65, 0.14), 0px 7px 36px 6px rgba(58, 53, 65, 0.12)',
            '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 20px 31px 3px rgba(58, 53, 65, 0.14), 0px 8px 38px 7px rgba(58, 53, 65, 0.12)',
            '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 21px 33px 3px rgba(58, 53, 65, 0.14), 0px 8px 40px 7px rgba(58, 53, 65, 0.12)',
            '0px 10px 14px -6px rgba(58, 53, 65, 0.2), 0px 22px 35px 3px rgba(58, 53, 65, 0.14), 0px 8px 42px 7px rgba(58, 53, 65, 0.12)',
            '0px 11px 14px -7px rgba(58, 53, 65, 0.2), 0px 23px 36px 3px rgba(58, 53, 65, 0.14), 0px 9px 44px 8px rgba(58, 53, 65, 0.12)',
            '0px 11px 15px -7px rgba(58, 53, 65, 0.2), 0px 24px 38px 3px rgba(58, 53, 65, 0.14), 0px 9px 46px 8px rgba(58, 53, 65, 0.12)'
        ];
    } else {
        return [
            'none',
            '0px 2px 1px -1px rgba(19, 17, 32, 0.2), 0px 1px 1px 0px rgba(19, 17, 32, 0.14), 0px 1px 3px 0px rgba(19, 17, 32, 0.12)',
            '0px 3px 1px -2px rgba(19, 17, 32, 0.2), 0px 2px 2px 0px rgba(19, 17, 32, 0.14), 0px 1px 5px 0px rgba(19, 17, 32, 0.12)',
            '0px 4px 8px -4px rgba(19, 17, 32, 0.42)',
            '0px 6px 18px -8px rgba(19, 17, 32, 0.56)',
            '0px 3px 5px -1px rgba(19, 17, 32, 0.2), 0px 5px 8px rgba(19, 17, 32, 0.14), 0px 1px 14px rgba(19, 17, 32, 0.12)',
            '0px 2px 10px 0px rgba(19, 17, 32, 0.1)',
            '0px 4px 5px -2px rgba(19, 17, 32, 0.2), 0px 7px 10px 1px rgba(19, 17, 32, 0.14), 0px 2px 16px 1px rgba(19, 17, 32, 0.12)',
            '0px 5px 5px -3px rgba(19, 17, 32, 0.2), 0px 8px 10px 1px rgba(19, 17, 32, 0.14), 0px 3px 14px 2px rgba(19, 17, 32, 0.12)',
            '0px 5px 6px -3px rgba(19, 17, 32, 0.2), 0px 9px 12px 1px rgba(19, 17, 32, 0.14), 0px 3px 16px 2px rgba(19, 17, 32, 0.12)',
            '0px 6px 6px -3px rgba(19, 17, 32, 0.2), 0px 10px 14px 1px rgba(19, 17, 32, 0.14), 0px 4px 18px 3px rgba(19, 17, 32, 0.12)',
            '0px 6px 7px -4px rgba(19, 17, 32, 0.2), 0px 11px 15px 1px rgba(19, 17, 32, 0.14), 0px 4px 20px 3px rgba(19, 17, 32, 0.12)',
            '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 12px 17px 2px rgba(19, 17, 32, 0.14), 0px 5px 22px 4px rgba(19, 17, 32, 0.12)',
            '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 13px 19px 2px rgba(19, 17, 32, 0.14), 0px 5px 24px 4px rgba(19, 17, 32, 0.12)',
            '0px 7px 9px -4px rgba(19, 17, 32, 0.2), 0px 14px 21px 2px rgba(19, 17, 32, 0.14), 0px 5px 26px 4px rgba(19, 17, 32, 0.12)',
            '0px 8px 9px -5px rgba(19, 17, 32, 0.2), 0px 15px 22px 2px rgba(19, 17, 32, 0.14), 0px 6px 28px 5px rgba(19, 17, 32, 0.12)',
            '0px 8px 10px -5px rgba(19, 17, 32, 0.2), 0px 16px 24px 2px rgba(19, 17, 32, 0.14), 0px 6px 30px 5px rgba(19, 17, 32, 0.12)',
            '0px 8px 11px -5px rgba(19, 17, 32, 0.2), 0px 17px 26px 2px rgba(19, 17, 32, 0.14), 0px 6px 32px 5px rgba(19, 17, 32, 0.12)',
            '0px 9px 11px -5px rgba(19, 17, 32, 0.2), 0px 18px 28px 2px rgba(19, 17, 32, 0.14), 0px 7px 34px 6px rgba(19, 17, 32, 0.12)',
            '0px 9px 12px -6px rgba(19, 17, 32, 0.2), 0px 19px 29px 2px rgba(19, 17, 32, 0.14), 0px 7px 36px 6px rgba(19, 17, 32, 0.12)',
            '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 20px 31px 3px rgba(19, 17, 32, 0.14), 0px 8px 38px 7px rgba(19, 17, 32, 0.12)',
            '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 21px 33px 3px rgba(19, 17, 32, 0.14), 0px 8px 40px 7px rgba(19, 17, 32, 0.12)',
            '0px 10px 14px -6px rgba(19, 17, 32, 0.2), 0px 22px 35px 3px rgba(19, 17, 32, 0.14), 0px 8px 42px 7px rgba(19, 17, 32, 0.12)',
            '0px 11px 14px -7px rgba(19, 17, 32, 0.2), 0px 23px 36px 3px rgba(19, 17, 32, 0.14), 0px 9px 44px 8px rgba(19, 17, 32, 0.12)',
            '0px 11px 15px -7px rgba(19, 17, 32, 0.2), 0px 24px 38px 3px rgba(19, 17, 32, 0.14), 0px 9px 46px 8px rgba(19, 17, 32, 0.12)'
        ];
    }
};
/* harmony default export */ const shadows = (Shadows);

;// CONCATENATED MODULE: ./src/@core/theme/breakpoints/index.js
const breakpoints = ()=>({
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    })
;
/* harmony default export */ const theme_breakpoints = (breakpoints);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeOptions.js
// ** MUI Theme Provider

// ** Theme Override Imports




const themeOptions = (settings)=>{
    // ** Vars
    const { mode , themeColor  } = settings;
    const themeConfig = {
        palette: palette(mode, themeColor),
        typography: {
            fontFamily: [
                'Inter',
                'sans-serif',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(',')
        },
        shadows: shadows(mode),
        ...spacing,
        breakpoints: theme_breakpoints(),
        shape: {
            borderRadius: 6
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        }
    };
    return (0,external_mui_utils_namespaceObject.deepmerge)(themeConfig, {
        palette: {
            primary: {
                ...themeConfig.palette[themeColor]
            }
        }
    });
};
/* harmony default export */ const ThemeOptions = (themeOptions);

;// CONCATENATED MODULE: ./src/@core/theme/globalStyles.js
const GlobalStyles = (theme)=>{
    return {
        '.ps__rail-y': {
            zIndex: 1,
            right: '0 !important',
            left: 'auto !important',
            '&:hover, &:focus, &.ps--clicking': {
                backgroundColor: theme.palette.mode === 'light' ? '#E4E5EB !important' : '#423D5D !important'
            },
            '& .ps__thumb-y': {
                right: '3px !important',
                left: 'auto !important',
                backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
            },
            '.layout-vertical-nav &': {
                '& .ps__thumb-y': {
                    width: 4,
                    backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
                },
                '&:hover, &:focus, &.ps--clicking': {
                    backgroundColor: 'transparent !important',
                    '& .ps__thumb-y': {
                        width: 6
                    }
                }
            }
        },
        '#nprogress': {
            pointerEvents: 'none',
            '& .bar': {
                left: 0,
                top: 0,
                height: 3,
                width: '100%',
                zIndex: 2000,
                position: 'fixed',
                backgroundColor: theme.palette.primary.main
            }
        }
    };
};
/* harmony default export */ const globalStyles = (GlobalStyles);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeComponent.js

// ** MUI Imports



// ** Theme Config

// ** Theme Override Imports


// ** Theme

// ** Global Styles

const ThemeComponent = (props)=>{
    // ** Props
    const { settings , children  } = props;
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = ThemeOptions(settings);
    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = (0,styles_.createTheme)(coreThemeConfig);
    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = (0,styles_.createTheme)(theme, {
        components: {
            ...overrides(theme)
        },
        typography: {
            ...theme_typography(theme)
        }
    });
    // ** Set responsive font sizes to true
    if (themeConfig/* default.responsiveFontSizes */.Z.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((GlobalStyles_default()), {
                styles: ()=>globalStyles(theme)
            }),
            children
        ]
    }));
};
/* harmony default export */ const theme_ThemeComponent = (ThemeComponent);

// EXTERNAL MODULE: ./src/@core/utils/create-emotion-cache.js + 1 modules
var create_emotion_cache = __webpack_require__(9787);
;// CONCATENATED MODULE: ./src/pages/_app.js

// ** Next Imports


// ** Loader Import

// ** Emotion Imports

// ** Config Imports

// ** Component Imports


// ** Contexts

// ** Utils Imports

// ** React Perfect Scrollbar Style

// ** Global css styles

const clientSideEmotionCache = (0,create_emotion_cache/* createEmotionCache */.S)();
// ** Pace Loader
if (themeConfig/* default.routingLoader */.Z.routingLoader) {
    router_.Router.events.on('routeChangeStart', ()=>{
        external_nprogress_default().start();
    });
    router_.Router.events.on('routeChangeError', ()=>{
        external_nprogress_default().done();
    });
    router_.Router.events.on('routeChangeComplete', ()=>{
        external_nprogress_default().done();
    });
}
// ** Configure JSS & ClassName
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    // Variables
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ jsx_runtime_.jsx(layouts_UserLayout, {
            children: page
        })
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `Zamon Parfum - Admin Panel`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: ` – Zamon Parfum - Admin Panel – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Material Design, MUI, Admin Template, React Admin Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SettingsProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SettingsConsumer, {
                    children: ({ settings  })=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(theme_ThemeComponent, {
                            settings: settings,
                            children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            }))
                        }));
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 2542:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountCogOutline");

/***/ }),

/***/ 7143:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountOutline");

/***/ }),

/***/ 5890:
/***/ ((module) => {

module.exports = require("mdi-material-ui/CurrencyUsd");

/***/ }),

/***/ 754:
/***/ ((module) => {

module.exports = require("mdi-material-ui/EmailOutline");

/***/ }),

/***/ 5442:
/***/ ((module) => {

module.exports = require("mdi-material-ui/HelpCircleOutline");

/***/ }),

/***/ 6384:
/***/ ((module) => {

module.exports = require("mdi-material-ui/MessageOutline");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,745], () => (__webpack_exec__(767)));
module.exports = __webpack_exports__;

})();