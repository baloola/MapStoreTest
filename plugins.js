/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        DetailsPlugin: require('./MapStore2/web/client/plugins/Details'),
        MousePositionPlugin: require('./MapStore2/web/client/plugins/MousePosition'),
        PrintPlugin: require('./MapStore2/web/client/plugins/Print'),
        IdentifyPlugin: require('./MapStore2/web/client/plugins/Identify'),
        TOCPlugin: require('./MapStore2/web/client/plugins/TOC'),
        BackgroundSwitcherPlugin: require('./MapStore2/web/client/plugins/BackgroundSwitcher'),
        MeasurePlugin: require('./MapStore2/web/client/plugins/Measure'),
        MapPlugin: require('./MapStore2/web/client/plugins/Map'),
        ToolbarPlugin: require('./MapStore2/web/client/plugins/Toolbar'),
        DrawerMenuPlugin: require('./MapStore2/web/client/plugins/DrawerMenu'),
        ShapeFilePlugin: require('./MapStore2/web/client/plugins/ShapeFile'),
        SnapshotPlugin: require('./MapStore2/web/client/plugins/Snapshot'),
        SettingsPlugin: require('./MapStore2/web/client/plugins/Settings'),
        ExpanderPlugin: require('./MapStore2/web/client/plugins/Expander'),
        SearchPlugin: require('./MapStore2/web/client/plugins/Search'),
        ScaleBoxPlugin: require('./MapStore2/web/client/plugins/ScaleBox'),
        LocatePlugin: require('./MapStore2/web/client/plugins/Locate'),
        ZoomInPlugin: require('./MapStore2/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('./MapStore2/web/client/plugins/ZoomOut'),
        FullScreenPlugin: require('./MapStore2/web/client/plugins/FullScreen'),
        MapLoadingPlugin: require('./MapStore2/web/client/plugins/MapLoading'),
        AboutPlugin: require('./MapStore2/web/client/product/plugins/About'),
        HelpPlugin: require('./MapStore2/web/client/plugins/Help'),
        HelpLinkPlugin: require('./MapStore2/web/client/plugins/HelpLink'),
        HomePlugin: require('./MapStore2/web/client/plugins/Home'),
        MadeWithLovePlugin: require('./MapStore2/web/client/product/plugins/MadeWithLove'),
        MetadataExplorerPlugin: require('./MapStore2/web/client/plugins/MetadataExplorer'),
        LoginPlugin: require('./MapStore2/web/client/plugins/Login'),
        OmniBarPlugin: require('./MapStore2/web/client/plugins/OmniBar'),
        GridContainerPlugin: require('./MapStore2/web/client/plugins/GridContainer'),
        BurgerMenuPlugin: require('./MapStore2/web/client/plugins/BurgerMenu'),
        UndoPlugin: require('./MapStore2/web/client/plugins/History'),
        RedoPlugin: require('./MapStore2/web/client/plugins/History'),
        MapsPlugin: require('./MapStore2/web/client/plugins/Maps'),
        DashboardsPlugin: require('./MapStore2/web/client/plugins/Dashboards'),
        ContentTabs: require('./MapStore2/web/client/plugins/ContentTabs'),
        MapSearchPlugin: require('./MapStore2/web/client/plugins/MapSearch'),
        HomeDescriptionPlugin: require('./MapStore2/web/client/product/plugins/HomeDescription'),
        ExamplesPlugin: require('./MapStore2/web/client/product/plugins/Examples'),
        MailingListsPlugin: require('./MapStore2/web/client/product/plugins/MailingLists'),
        MapTypePlugin: require('./MapStore2/web/client/product/plugins/MapType'),
        LanguagePlugin: require('./MapStore2/web/client/plugins/Language'),
        AttributionPlugin: require('./MapStore2/web/client/product/plugins/Attribution'),
        HeaderPlugin: require('./MapStore2/web/client/product/plugins/Header'),
        ForkPlugin: require('./MapStore2/web/client/product/plugins/Fork'),
        FooterPlugin: require('./MapStore2/web/client/product/plugins/Footer'),
        ManagerPlugin: require('./MapStore2/web/client/plugins/manager/Manager'),
        UserManagerPlugin: require('./MapStore2/web/client/plugins/manager/UserManager'),
        GroupManagerPlugin: require('./MapStore2/web/client/plugins/manager/GroupManager'),
        RulesManagerPlugin: require('./MapStore2/web/client/plugins/manager/RulesManager'),
        ManagerMenuPlugin: require('./MapStore2/web/client/plugins/manager/ManagerMenu'),
        RedirectPlugin: require('./MapStore2/web/client/plugins/Redirect'),
        SharePlugin: require('./MapStore2/web/client/plugins/Share'),
        SavePlugin: require('./MapStore2/web/client/plugins/Save'),
        SaveAsPlugin: require('./MapStore2/web/client/plugins/SaveAs'),
        CreateNewMapPlugin: require('./MapStore2/web/client/plugins/CreateNewMap'),
        QueryPanelPlugin: require('./MapStore2/web/client/plugins/QueryPanel'),
        WFSDownloadPlugin: require('./MapStore2/web/client/plugins/WFSDownload'),
        TutorialPlugin: require('./MapStore2/web/client/plugins/Tutorial'),
        ThemeSwitcherPlugin: require('./MapStore2/web/client/plugins/ThemeSwitcher'),
        ScrollTopPlugin: require('./MapStore2/web/client/plugins/ScrollTop'),
        GoFull: require('./MapStore2/web/client/plugins/GoFull'),
        GlobeViewSwitcherPlugin: require('./MapStore2/web/client/plugins/GlobeViewSwitcher'),
        BackgroundSelectorPlugin: require('./MapStore2/web/client/plugins/BackgroundSelector'),
        SearchServicesConfigPlugin: require('./MapStore2/web/client/plugins/SearchServicesConfig'),
        VersionPlugin: require('./MapStore2/web/client/plugins/Version'),
        CookiePlugin: require('./MapStore2/web/client/plugins/Cookie'),
        NotificationsPlugin: require('./MapStore2/web/client/plugins/Notifications'),
        FeatureEditorPlugin: require('./MapStore2/web/client/plugins/FeatureEditor'),
        AutoMapUpdatePlugin: require('./MapStore2/web/client/plugins/AutoMapUpdate'),
        MapFooterPlugin: require('./MapStore2/web/client/plugins/MapFooter'),
        AnnotationsPlugin: require('./MapStore2/web/client/plugins/Annotations'),
        Dashboard: require('./MapStore2/web/client/plugins/Dashboard'),
        DashboardEditor: require('./MapStore2/web/client/plugins/DashboardEditor'),
        WidgetsPlugin: require('./MapStore2/web/client/plugins/Widgets'),
        WidgetsBuilderPlugin: require('./MapStore2/web/client/plugins/WidgetsBuilder'),
        TOCItemsSettingsPlugin: require('./MapStore2/web/client/plugins/TOCItemsSettings'),
        RulesDataGridPlugin: require('./MapStore2/web/client/plugins/RulesDataGrid'),
        RulesManagerFooter: require('./MapStore2/web/client/plugins/RulesManagerFooter'),
        NavMenu: require('./MapStore2/web/client/product/plugins/NavMenu'),
        RulesEditorPlugin: require('./MapStore2/web/client/plugins/RulesEditor'),
        FloatingLegendPlugin: require('./MapStore2/web/client/plugins/FloatingLegend'),
        HelloWorldPlugin: require('./js/HelloWorld')
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('./MapStore2/web/client/components/data/identify/SwipeHeader')
    }
};
