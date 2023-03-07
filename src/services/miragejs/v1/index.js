import { OK, NOT_FOUND, SERVER_ERROR } from "@/services/miragejs/responses";

const healthCheck = (schema, request) => {
  return OK({ "v1": "ok" });
};

const simulateQuery4 = (schema, request) => {
  return SERVER_ERROR("Server Error");
};

const simulateQuery3 = (schema, request) => {
  return OK([]);
};

const simulateQuery2 = (schema, request) => {
  return OK(
[
    {
        "option_id": "1",
        "option_name": "siteurl",
        "option_value": "https://roommate-hitting-temporarily-liberal.trycloudflare.com",
        "autoload": "yes"
    },
    {
        "option_id": "2",
        "option_name": "home",
        "option_value": "https://roommate-hitting-temporarily-liberal.trycloudflare.com",
        "autoload": "yes"
    },
    {
        "option_id": "3",
        "option_name": "blogname",
        "option_value": "D.T",
        "autoload": "yes"
    },
    {
        "option_id": "4",
        "option_name": "blogdescription",
        "option_value": "Just another WordPress site",
        "autoload": "yes"
    },
    {
        "option_id": "5",
        "option_name": "users_can_register",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "6",
        "option_name": "admin_email",
        "option_value": "zdmc23@gmail.com",
        "autoload": "yes"
    },
    {
        "option_id": "7",
        "option_name": "start_of_week",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "8",
        "option_name": "use_balanceTags",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "9",
        "option_name": "use_smilies",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "10",
        "option_name": "require_name_email",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "11",
        "option_name": "comments_notify",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "12",
        "option_name": "posts_per_rss",
        "option_value": "10",
        "autoload": "yes"
    },
    {
        "option_id": "13",
        "option_name": "rss_use_excerpt",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "14",
        "option_name": "mailserver_url",
        "option_value": "mail.example.com",
        "autoload": "yes"
    },
    {
        "option_id": "15",
        "option_name": "mailserver_login",
        "option_value": "login@example.com",
        "autoload": "yes"
    },
    {
        "option_id": "16",
        "option_name": "mailserver_pass",
        "option_value": "password",
        "autoload": "yes"
    },
    {
        "option_id": "17",
        "option_name": "mailserver_port",
        "option_value": "110",
        "autoload": "yes"
    },
    {
        "option_id": "18",
        "option_name": "default_category",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "19",
        "option_name": "default_comment_status",
        "option_value": "open",
        "autoload": "yes"
    },
    {
        "option_id": "20",
        "option_name": "default_ping_status",
        "option_value": "open",
        "autoload": "yes"
    },
    {
        "option_id": "21",
        "option_name": "default_pingback_flag",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "22",
        "option_name": "posts_per_page",
        "option_value": "10",
        "autoload": "yes"
    },
    {
        "option_id": "23",
        "option_name": "date_format",
        "option_value": "F j, Y",
        "autoload": "yes"
    },
    {
        "option_id": "24",
        "option_name": "time_format",
        "option_value": "g:i a",
        "autoload": "yes"
    },
    {
        "option_id": "25",
        "option_name": "links_updated_date_format",
        "option_value": "F j, Y g:i a",
        "autoload": "yes"
    },
    {
        "option_id": "26",
        "option_name": "comment_moderation",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "27",
        "option_name": "moderation_notify",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "28",
        "option_name": "permalink_structure",
        "option_value": "/%postname%/",
        "autoload": "yes"
    },
    {
        "option_id": "29",
        "option_name": "rewrite_rules",
        "option_value": "a:261:{s:11:\"^wp-json/?$\";s:22:\"index.php?rest_route=/\";s:14:\"^wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:21:\"^index.php/wp-json/?$\";s:22:\"index.php?rest_route=/\";s:24:\"^index.php/wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:17:\"^wp-sitemap\\.xml$\";s:23:\"index.php?sitemap=index\";s:17:\"^wp-sitemap\\.xsl$\";s:36:\"index.php?sitemap-stylesheet=sitemap\";s:23:\"^wp-sitemap-index\\.xsl$\";s:34:\"index.php?sitemap-stylesheet=index\";s:48:\"^wp-sitemap-([a-z]+?)-([a-z\\d_-]+?)-(\\d+?)\\.xml$\";s:75:\"index.php?sitemap=$matches[1]&sitemap-subtype=$matches[2]&paged=$matches[3]\";s:34:\"^wp-sitemap-([a-z]+?)-(\\d+?)\\.xml$\";s:47:\"index.php?sitemap=$matches[1]&paged=$matches[2]\";s:12:\"wo_client/?$\";s:29:\"index.php?post_type=wo_client\";s:42:\"wo_client/feed/(feed|rdf|rss|rss2|atom)/?$\";s:46:\"index.php?post_type=wo_client&feed=$matches[1]\";s:37:\"wo_client/(feed|rdf|rss|rss2|atom)/?$\";s:46:\"index.php?post_type=wo_client&feed=$matches[1]\";s:29:\"wo_client/page/([0-9]{1,})/?$\";s:47:\"index.php?post_type=wo_client&paged=$matches[1]\";s:11:\"^oauth/(.+)\";s:27:\"index.php?oauth=$matches[1]\";s:17:\"^.well-known/(.+)\";s:32:\"index.php?well-known=$matches[1]\";s:21:\"^wpoauthincludes/(.+)\";s:37:\"index.php?wpoauthincludes=$matches[1]\";s:11:\"contacts/?$\";s:28:\"index.php?post_type=contacts\";s:28:\"contacts/page/([0-9]{1,})/?$\";s:46:\"index.php?post_type=contacts&paged=$matches[1]\";s:19:\"contacts/([0-9]+)?$\";s:42:\"index.php?post_type=contacts&p=$matches[1]\";s:9:\"groups/?$\";s:26:\"index.php?post_type=groups\";s:26:\"groups/page/([0-9]{1,})/?$\";s:44:\"index.php?post_type=groups&paged=$matches[1]\";s:17:\"groups/([0-9]+)?$\";s:40:\"index.php?post_type=groups&p=$matches[1]\";s:15:\"peoplegroups/?$\";s:32:\"index.php?post_type=peoplegroups\";s:32:\"peoplegroups/page/([0-9]{1,})/?$\";s:50:\"index.php?post_type=peoplegroups&paged=$matches[1]\";s:23:\"peoplegroups/([0-9]+)?$\";s:46:\"index.php?post_type=peoplegroups&p=$matches[1]\";s:20:\"starter_post_type/?$\";s:37:\"index.php?post_type=starter_post_type\";s:37:\"starter_post_type/page/([0-9]{1,})/?$\";s:55:\"index.php?post_type=starter_post_type&paged=$matches[1]\";s:28:\"starter_post_type/([0-9]+)?$\";s:51:\"index.php?post_type=starter_post_type&p=$matches[1]\";s:47:\"category/(.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:42:\"category/(.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:23:\"category/(.+?)/embed/?$\";s:46:\"index.php?category_name=$matches[1]&embed=true\";s:35:\"category/(.+?)/page/?([0-9]{1,})/?$\";s:53:\"index.php?category_name=$matches[1]&paged=$matches[2]\";s:17:\"category/(.+?)/?$\";s:35:\"index.php?category_name=$matches[1]\";s:44:\"tag/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:39:\"tag/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:20:\"tag/([^/]+)/embed/?$\";s:36:\"index.php?tag=$matches[1]&embed=true\";s:32:\"tag/([^/]+)/page/?([0-9]{1,})/?$\";s:43:\"index.php?tag=$matches[1]&paged=$matches[2]\";s:14:\"tag/([^/]+)/?$\";s:25:\"index.php?tag=$matches[1]\";s:45:\"type/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:40:\"type/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:21:\"type/([^/]+)/embed/?$\";s:44:\"index.php?post_format=$matches[1]&embed=true\";s:33:\"type/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?post_format=$matches[1]&paged=$matches[2]\";s:15:\"type/([^/]+)/?$\";s:33:\"index.php?post_format=$matches[1]\";s:37:\"wo_client/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:47:\"wo_client/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:67:\"wo_client/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:62:\"wo_client/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:62:\"wo_client/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:43:\"wo_client/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:26:\"wo_client/([^/]+)/embed/?$\";s:42:\"index.php?wo_client=$matches[1]&embed=true\";s:30:\"wo_client/([^/]+)/trackback/?$\";s:36:\"index.php?wo_client=$matches[1]&tb=1\";s:50:\"wo_client/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:48:\"index.php?wo_client=$matches[1]&feed=$matches[2]\";s:45:\"wo_client/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:48:\"index.php?wo_client=$matches[1]&feed=$matches[2]\";s:38:\"wo_client/([^/]+)/page/?([0-9]{1,})/?$\";s:49:\"index.php?wo_client=$matches[1]&paged=$matches[2]\";s:45:\"wo_client/([^/]+)/comment-page-([0-9]{1,})/?$\";s:49:\"index.php?wo_client=$matches[1]&cpage=$matches[2]\";s:34:\"wo_client/([^/]+)(?:/([0-9]+))?/?$\";s:48:\"index.php?wo_client=$matches[1]&page=$matches[2]\";s:26:\"wo_client/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:36:\"wo_client/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:56:\"wo_client/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:51:\"wo_client/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:51:\"wo_client/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:32:\"wo_client/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:41:\"itsec-dashboard/.+?/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:51:\"itsec-dashboard/.+?/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:71:\"itsec-dashboard/.+?/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:66:\"itsec-dashboard/.+?/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:66:\"itsec-dashboard/.+?/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:47:\"itsec-dashboard/.+?/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:30:\"itsec-dashboard/(.+?)/embed/?$\";s:48:\"index.php?itsec-dashboard=$matches[1]&embed=true\";s:34:\"itsec-dashboard/(.+?)/trackback/?$\";s:42:\"index.php?itsec-dashboard=$matches[1]&tb=1\";s:42:\"itsec-dashboard/(.+?)/page/?([0-9]{1,})/?$\";s:55:\"index.php?itsec-dashboard=$matches[1]&paged=$matches[2]\";s:49:\"itsec-dashboard/(.+?)/comment-page-([0-9]{1,})/?$\";s:55:\"index.php?itsec-dashboard=$matches[1]&cpage=$matches[2]\";s:38:\"itsec-dashboard/(.+?)(?:/([0-9]+))?/?$\";s:54:\"index.php?itsec-dashboard=$matches[1]&page=$matches[2]\";s:43:\"itsec-dash-card/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:53:\"itsec-dash-card/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:73:\"itsec-dash-card/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:68:\"itsec-dash-card/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:68:\"itsec-dash-card/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:49:\"itsec-dash-card/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:32:\"itsec-dash-card/([^/]+)/embed/?$\";s:48:\"index.php?itsec-dash-card=$matches[1]&embed=true\";s:36:\"itsec-dash-card/([^/]+)/trackback/?$\";s:42:\"index.php?itsec-dash-card=$matches[1]&tb=1\";s:44:\"itsec-dash-card/([^/]+)/page/?([0-9]{1,})/?$\";s:55:\"index.php?itsec-dash-card=$matches[1]&paged=$matches[2]\";s:51:\"itsec-dash-card/([^/]+)/comment-page-([0-9]{1,})/?$\";s:55:\"index.php?itsec-dash-card=$matches[1]&cpage=$matches[2]\";s:40:\"itsec-dash-card/([^/]+)(?:/([0-9]+))?/?$\";s:54:\"index.php?itsec-dash-card=$matches[1]&page=$matches[2]\";s:32:\"itsec-dash-card/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:42:\"itsec-dash-card/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:62:\"itsec-dash-card/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:57:\"itsec-dash-card/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:57:\"itsec-dash-card/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:38:\"itsec-dash-card/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:44:\"site_link_system/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:54:\"site_link_system/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:74:\"site_link_system/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:69:\"site_link_system/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:69:\"site_link_system/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:50:\"site_link_system/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:33:\"site_link_system/([^/]+)/embed/?$\";s:49:\"index.php?site_link_system=$matches[1]&embed=true\";s:37:\"site_link_system/([^/]+)/trackback/?$\";s:43:\"index.php?site_link_system=$matches[1]&tb=1\";s:45:\"site_link_system/([^/]+)/page/?([0-9]{1,})/?$\";s:56:\"index.php?site_link_system=$matches[1]&paged=$matches[2]\";s:52:\"site_link_system/([^/]+)/comment-page-([0-9]{1,})/?$\";s:56:\"index.php?site_link_system=$matches[1]&cpage=$matches[2]\";s:41:\"site_link_system/([^/]+)(?:/([0-9]+))?/?$\";s:55:\"index.php?site_link_system=$matches[1]&page=$matches[2]\";s:33:\"site_link_system/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:43:\"site_link_system/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:63:\"site_link_system/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:58:\"site_link_system/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:58:\"site_link_system/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:39:\"site_link_system/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:48:\"dt_network_dashboard/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:58:\"dt_network_dashboard/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:78:\"dt_network_dashboard/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:73:\"dt_network_dashboard/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:73:\"dt_network_dashboard/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:54:\"dt_network_dashboard/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:37:\"dt_network_dashboard/([^/]+)/embed/?$\";s:53:\"index.php?dt_network_dashboard=$matches[1]&embed=true\";s:41:\"dt_network_dashboard/([^/]+)/trackback/?$\";s:47:\"index.php?dt_network_dashboard=$matches[1]&tb=1\";s:49:\"dt_network_dashboard/([^/]+)/page/?([0-9]{1,})/?$\";s:60:\"index.php?dt_network_dashboard=$matches[1]&paged=$matches[2]\";s:56:\"dt_network_dashboard/([^/]+)/comment-page-([0-9]{1,})/?$\";s:60:\"index.php?dt_network_dashboard=$matches[1]&cpage=$matches[2]\";s:45:\"dt_network_dashboard/([^/]+)(?:/([0-9]+))?/?$\";s:59:\"index.php?dt_network_dashboard=$matches[1]&page=$matches[2]\";s:37:\"dt_network_dashboard/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:47:\"dt_network_dashboard/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:67:\"dt_network_dashboard/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:62:\"dt_network_dashboard/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:62:\"dt_network_dashboard/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:43:\"dt_network_dashboard/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:36:\"contacts/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:46:\"contacts/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:66:\"contacts/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:61:\"contacts/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:61:\"contacts/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:42:\"contacts/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:25:\"contacts/([^/]+)/embed/?$\";s:56:\"index.php?post_type=contacts&name=$matches[1]&embed=true\";s:29:\"contacts/([^/]+)/trackback/?$\";s:50:\"index.php?post_type=contacts&name=$matches[1]&tb=1\";s:37:\"contacts/([^/]+)/page/?([0-9]{1,})/?$\";s:63:\"index.php?post_type=contacts&name=$matches[1]&paged=$matches[2]\";s:44:\"contacts/([^/]+)/comment-page-([0-9]{1,})/?$\";s:63:\"index.php?post_type=contacts&name=$matches[1]&cpage=$matches[2]\";s:33:\"contacts/([^/]+)(?:/([0-9]+))?/?$\";s:62:\"index.php?post_type=contacts&name=$matches[1]&page=$matches[2]\";s:25:\"contacts/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:35:\"contacts/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:55:\"contacts/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:50:\"contacts/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:50:\"contacts/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:31:\"contacts/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:34:\"groups/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:44:\"groups/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:64:\"groups/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:59:\"groups/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:59:\"groups/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:40:\"groups/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:23:\"groups/([^/]+)/embed/?$\";s:54:\"index.php?post_type=groups&name=$matches[1]&embed=true\";s:27:\"groups/([^/]+)/trackback/?$\";s:48:\"index.php?post_type=groups&name=$matches[1]&tb=1\";s:35:\"groups/([^/]+)/page/?([0-9]{1,})/?$\";s:61:\"index.php?post_type=groups&name=$matches[1]&paged=$matches[2]\";s:42:\"groups/([^/]+)/comment-page-([0-9]{1,})/?$\";s:61:\"index.php?post_type=groups&name=$matches[1]&cpage=$matches[2]\";s:31:\"groups/([^/]+)(?:/([0-9]+))?/?$\";s:60:\"index.php?post_type=groups&name=$matches[1]&page=$matches[2]\";s:23:\"groups/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:33:\"groups/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:53:\"groups/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:48:\"groups/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:48:\"groups/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:29:\"groups/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:40:\"peoplegroups/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:50:\"peoplegroups/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:70:\"peoplegroups/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:65:\"peoplegroups/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:65:\"peoplegroups/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:46:\"peoplegroups/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:29:\"peoplegroups/([^/]+)/embed/?$\";s:60:\"index.php?post_type=peoplegroups&name=$matches[1]&embed=true\";s:33:\"peoplegroups/([^/]+)/trackback/?$\";s:54:\"index.php?post_type=peoplegroups&name=$matches[1]&tb=1\";s:41:\"peoplegroups/([^/]+)/page/?([0-9]{1,})/?$\";s:67:\"index.php?post_type=peoplegroups&name=$matches[1]&paged=$matches[2]\";s:48:\"peoplegroups/([^/]+)/comment-page-([0-9]{1,})/?$\";s:67:\"index.php?post_type=peoplegroups&name=$matches[1]&cpage=$matches[2]\";s:37:\"peoplegroups/([^/]+)(?:/([0-9]+))?/?$\";s:66:\"index.php?post_type=peoplegroups&name=$matches[1]&page=$matches[2]\";s:29:\"peoplegroups/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:39:\"peoplegroups/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:59:\"peoplegroups/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:54:\"peoplegroups/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:54:\"peoplegroups/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:35:\"peoplegroups/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:45:\"starter_post_type/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:55:\"starter_post_type/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:75:\"starter_post_type/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:70:\"starter_post_type/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:70:\"starter_post_type/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:51:\"starter_post_type/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:34:\"starter_post_type/([^/]+)/embed/?$\";s:65:\"index.php?post_type=starter_post_type&name=$matches[1]&embed=true\";s:38:\"starter_post_type/([^/]+)/trackback/?$\";s:59:\"index.php?post_type=starter_post_type&name=$matches[1]&tb=1\";s:46:\"starter_post_type/([^/]+)/page/?([0-9]{1,})/?$\";s:72:\"index.php?post_type=starter_post_type&name=$matches[1]&paged=$matches[2]\";s:53:\"starter_post_type/([^/]+)/comment-page-([0-9]{1,})/?$\";s:72:\"index.php?post_type=starter_post_type&name=$matches[1]&cpage=$matches[2]\";s:42:\"starter_post_type/([^/]+)(?:/([0-9]+))?/?$\";s:71:\"index.php?post_type=starter_post_type&name=$matches[1]&page=$matches[2]\";s:34:\"starter_post_type/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:44:\"starter_post_type/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:64:\"starter_post_type/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:59:\"starter_post_type/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:59:\"starter_post_type/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:40:\"starter_post_type/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:12:\"robots\\.txt$\";s:18:\"index.php?robots=1\";s:13:\"favicon\\.ico$\";s:19:\"index.php?favicon=1\";s:48:\".*wp-(atom|rdf|rss|rss2|feed|commentsrss2)\\.php$\";s:18:\"index.php?feed=old\";s:20:\".*wp-app\\.php(/.*)?$\";s:19:\"index.php?error=403\";s:18:\".*wp-register.php$\";s:23:\"index.php?register=true\";s:32:\"feed/(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:27:\"(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:8:\"embed/?$\";s:21:\"index.php?&embed=true\";s:20:\"page/?([0-9]{1,})/?$\";s:28:\"index.php?&paged=$matches[1]\";s:41:\"comments/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:36:\"comments/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:17:\"comments/embed/?$\";s:21:\"index.php?&embed=true\";s:44:\"search/(.+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:39:\"search/(.+)/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:20:\"search/(.+)/embed/?$\";s:34:\"index.php?s=$matches[1]&embed=true\";s:32:\"search/(.+)/page/?([0-9]{1,})/?$\";s:41:\"index.php?s=$matches[1]&paged=$matches[2]\";s:14:\"search/(.+)/?$\";s:23:\"index.php?s=$matches[1]\";s:47:\"author/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:42:\"author/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:23:\"author/([^/]+)/embed/?$\";s:44:\"index.php?author_name=$matches[1]&embed=true\";s:35:\"author/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?author_name=$matches[1]&paged=$matches[2]\";s:17:\"author/([^/]+)/?$\";s:33:\"index.php?author_name=$matches[1]\";s:69:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:64:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:45:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/embed/?$\";s:74:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&embed=true\";s:57:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:81:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&paged=$matches[4]\";s:39:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/?$\";s:63:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]\";s:56:\"([0-9]{4})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:51:\"([0-9]{4})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:32:\"([0-9]{4})/([0-9]{1,2})/embed/?$\";s:58:\"index.php?year=$matches[1]&monthnum=$matches[2]&embed=true\";s:44:\"([0-9]{4})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:65:\"index.php?year=$matches[1]&monthnum=$matches[2]&paged=$matches[3]\";s:26:\"([0-9]{4})/([0-9]{1,2})/?$\";s:47:\"index.php?year=$matches[1]&monthnum=$matches[2]\";s:43:\"([0-9]{4})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:38:\"([0-9]{4})/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:19:\"([0-9]{4})/embed/?$\";s:37:\"index.php?year=$matches[1]&embed=true\";s:31:\"([0-9]{4})/page/?([0-9]{1,})/?$\";s:44:\"index.php?year=$matches[1]&paged=$matches[2]\";s:13:\"([0-9]{4})/?$\";s:26:\"index.php?year=$matches[1]\";s:27:\".?.+?/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\".?.+?/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\".?.+?/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\".?.+?/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:16:\"(.?.+?)/embed/?$\";s:41:\"index.php?pagename=$matches[1]&embed=true\";s:20:\"(.?.+?)/trackback/?$\";s:35:\"index.php?pagename=$matches[1]&tb=1\";s:40:\"(.?.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:35:\"(.?.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:28:\"(.?.+?)/page/?([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&paged=$matches[2]\";s:35:\"(.?.+?)/comment-page-([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&cpage=$matches[2]\";s:24:\"(.?.+?)(?:/([0-9]+))?/?$\";s:47:\"index.php?pagename=$matches[1]&page=$matches[2]\";s:27:\"[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\"[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\"[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\"[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:16:\"([^/]+)/embed/?$\";s:37:\"index.php?name=$matches[1]&embed=true\";s:20:\"([^/]+)/trackback/?$\";s:31:\"index.php?name=$matches[1]&tb=1\";s:40:\"([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?name=$matches[1]&feed=$matches[2]\";s:35:\"([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?name=$matches[1]&feed=$matches[2]\";s:28:\"([^/]+)/page/?([0-9]{1,})/?$\";s:44:\"index.php?name=$matches[1]&paged=$matches[2]\";s:35:\"([^/]+)/comment-page-([0-9]{1,})/?$\";s:44:\"index.php?name=$matches[1]&cpage=$matches[2]\";s:24:\"([^/]+)(?:/([0-9]+))?/?$\";s:43:\"index.php?name=$matches[1]&page=$matches[2]\";s:16:\"[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:26:\"[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:46:\"[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:41:\"[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:41:\"[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:22:\"[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";}",
        "autoload": "yes"
    },
    {
        "option_id": "30",
        "option_name": "hack_file",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "31",
        "option_name": "blog_charset",
        "option_value": "UTF-8",
        "autoload": "yes"
    },
    {
        "option_id": "32",
        "option_name": "moderation_keys",
        "option_value": "",
        "autoload": "no"
    },
    {
        "option_id": "33",
        "option_name": "active_plugins",
        "option_value": "a:15:{i:0;s:31:\"query-monitor/query-monitor.php\";i:1;s:37:\"action-scheduler/action-scheduler.php\";i:2;s:41:\"better-wp-security/better-wp-security.php\";i:3;s:51:\"disciple-tools-autolink/disciple-tools-autolink.php\";i:4;s:63:\"disciple-tools-data-reporting/disciple-tools-data-reporting.php\";i:5;s:59:\"disciple-tools-demo-content/disciple-tools-demo-content.php\";i:6;s:53:\"disciple-tools-genmapper/disciple-tools-genmapper.php\";i:7;s:69:\"disciple-tools-mobile-app-plugin/disciple-tools-mobile-app-plugin.php\";i:8;s:69:\"disciple-tools-network-dashboard/disciple-tools-network-dashboard.php\";i:9;s:35:\"oauth2-provider/wp-oauth-server.php\";i:10;s:27:\"wp-crontrol/wp-crontrol.php\";i:11;s:33:\"wp-data-access/wp-data-access.php\";i:12;s:26:\"wp-react-kit/job-place.php\";i:13;s:63:\"wp-scheduled-reports/disciple-tools-plugin-starter-template.php\";i:14;s:27:\"wp-webhooks/wp-webhooks.php\";}",
        "autoload": "yes"
    },
    {
        "option_id": "34",
        "option_name": "category_base",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "35",
        "option_name": "ping_sites",
        "option_value": "http://rpc.pingomatic.com/",
        "autoload": "yes"
    },
    {
        "option_id": "36",
        "option_name": "comment_max_links",
        "option_value": "2",
        "autoload": "yes"
    },
    {
        "option_id": "37",
        "option_name": "gmt_offset",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "38",
        "option_name": "default_email_category",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "39",
        "option_name": "recently_edited",
        "option_value": "",
        "autoload": "no"
    },
    {
        "option_id": "40",
        "option_name": "template",
        "option_value": "disciple-tools-theme",
        "autoload": "yes"
    },
    {
        "option_id": "41",
        "option_name": "stylesheet",
        "option_value": "disciple-tools-theme",
        "autoload": "yes"
    },
    {
        "option_id": "44",
        "option_name": "comment_registration",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "45",
        "option_name": "html_type",
        "option_value": "text/html",
        "autoload": "yes"
    },
    {
        "option_id": "46",
        "option_name": "use_trackback",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "47",
        "option_name": "default_role",
        "option_value": "multiplier",
        "autoload": "yes"
    },
    {
        "option_id": "48",
        "option_name": "db_version",
        "option_value": "53496",
        "autoload": "yes"
    },
    {
        "option_id": "49",
        "option_name": "uploads_use_yearmonth_folders",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "50",
        "option_name": "upload_path",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "51",
        "option_name": "blog_public",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "52",
        "option_name": "default_link_category",
        "option_value": "2",
        "autoload": "yes"
    },
    {
        "option_id": "53",
        "option_name": "show_on_front",
        "option_value": "posts",
        "autoload": "yes"
    },
    {
        "option_id": "54",
        "option_name": "tag_base",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "55",
        "option_name": "show_avatars",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "56",
        "option_name": "avatar_rating",
        "option_value": "G",
        "autoload": "yes"
    },
    {
        "option_id": "57",
        "option_name": "upload_url_path",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "58",
        "option_name": "thumbnail_size_w",
        "option_value": "150",
        "autoload": "yes"
    },
    {
        "option_id": "59",
        "option_name": "thumbnail_size_h",
        "option_value": "150",
        "autoload": "yes"
    },
    {
        "option_id": "60",
        "option_name": "thumbnail_crop",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "61",
        "option_name": "medium_size_w",
        "option_value": "300",
        "autoload": "yes"
    },
    {
        "option_id": "62",
        "option_name": "medium_size_h",
        "option_value": "300",
        "autoload": "yes"
    },
    {
        "option_id": "63",
        "option_name": "avatar_default",
        "option_value": "mystery",
        "autoload": "yes"
    },
    {
        "option_id": "64",
        "option_name": "large_size_w",
        "option_value": "1024",
        "autoload": "yes"
    },
    {
        "option_id": "65",
        "option_name": "large_size_h",
        "option_value": "1024",
        "autoload": "yes"
    },
    {
        "option_id": "66",
        "option_name": "image_default_link_type",
        "option_value": "none",
        "autoload": "yes"
    },
    {
        "option_id": "67",
        "option_name": "image_default_size",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "68",
        "option_name": "image_default_align",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "69",
        "option_name": "close_comments_for_old_posts",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "70",
        "option_name": "close_comments_days_old",
        "option_value": "14",
        "autoload": "yes"
    },
    {
        "option_id": "71",
        "option_name": "thread_comments",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "72",
        "option_name": "thread_comments_depth",
        "option_value": "5",
        "autoload": "yes"
    },
    {
        "option_id": "73",
        "option_name": "page_comments",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "74",
        "option_name": "comments_per_page",
        "option_value": "50",
        "autoload": "yes"
    },
    {
        "option_id": "75",
        "option_name": "default_comments_page",
        "option_value": "newest",
        "autoload": "yes"
    },
    {
        "option_id": "76",
        "option_name": "comment_order",
        "option_value": "asc",
        "autoload": "yes"
    },
    {
        "option_id": "77",
        "option_name": "sticky_posts",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "78",
        "option_name": "widget_categories",
        "option_value": "a:2:{i:2;a:4:{s:5:\"title\";s:0:\"\";s:5:\"count\";i:0;s:12:\"hierarchical\";i:0;s:8:\"dropdown\";i:0;}s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "79",
        "option_name": "widget_text",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "80",
        "option_name": "widget_rss",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "81",
        "option_name": "uninstall_plugins",
        "option_value": "a:2:{s:103:\"var/www/html/wp-content/themes/disciple-tools-theme/dt-core/libraries/posts-to-posts/posts-to-posts.php\";a:2:{i:0;s:11:\"P2P_Storage\";i:1;s:9:\"uninstall\";}s:41:\"better-wp-security/better-wp-security.php\";a:2:{i:0;s:10:\"ITSEC_Core\";i:1;s:16:\"handle_uninstall\";}}",
        "autoload": "no"
    },
    {
        "option_id": "82",
        "option_name": "timezone_string",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "83",
        "option_name": "page_for_posts",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "84",
        "option_name": "page_on_front",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "85",
        "option_name": "default_post_format",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "86",
        "option_name": "link_manager_enabled",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "87",
        "option_name": "finished_splitting_shared_terms",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "88",
        "option_name": "site_icon",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "89",
        "option_name": "medium_large_size_w",
        "option_value": "768",
        "autoload": "yes"
    },
    {
        "option_id": "90",
        "option_name": "medium_large_size_h",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "91",
        "option_name": "wp_page_for_privacy_policy",
        "option_value": "3",
        "autoload": "yes"
    },
    {
        "option_id": "92",
        "option_name": "show_comments_cookies_opt_in",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "93",
        "option_name": "admin_email_lifespan",
        "option_value": "1672964203",
        "autoload": "yes"
    },
    {
        "option_id": "94",
        "option_name": "initial_db_version",
        "option_value": "47018",
        "autoload": "yes"
    },
    {
        "option_id": "95",
        "option_name": "wp_user_roles",
        "option_value": "a:10:{s:13:\"administrator\";a:2:{s:4:\"name\";s:13:\"Administrator\";s:12:\"capabilities\";a:93:{s:13:\"switch_themes\";b:1;s:11:\"edit_themes\";b:1;s:16:\"activate_plugins\";b:1;s:12:\"edit_plugins\";b:1;s:10:\"edit_users\";b:1;s:10:\"edit_files\";b:1;s:14:\"manage_options\";b:1;s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:6:\"import\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:8:\"level_10\";b:1;s:7:\"level_9\";b:1;s:7:\"level_8\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;s:12:\"delete_users\";b:1;s:12:\"create_users\";b:1;s:17:\"unfiltered_upload\";b:1;s:14:\"edit_dashboard\";b:1;s:14:\"update_plugins\";b:1;s:14:\"delete_plugins\";b:1;s:15:\"install_plugins\";b:1;s:13:\"update_themes\";b:1;s:14:\"install_themes\";b:1;s:11:\"update_core\";b:1;s:10:\"list_users\";b:1;s:12:\"remove_users\";b:1;s:13:\"promote_users\";b:1;s:18:\"edit_theme_options\";b:1;s:13:\"delete_themes\";b:1;s:6:\"export\";b:1;s:21:\"access_disciple_tools\";b:1;s:10:\"list_roles\";b:1;s:12:\"create_roles\";b:1;s:12:\"delete_roles\";b:1;s:10:\"edit_roles\";b:1;s:16:\"restrict_content\";b:1;s:9:\"manage_dt\";b:1;s:21:\"dt_all_admin_contacts\";b:1;s:22:\"dt_all_access_contacts\";b:1;s:19:\"dt_all_admin_groups\";b:1;s:15:\"access_contacts\";b:1;s:15:\"create_contacts\";b:1;s:13:\"read_location\";b:1;s:19:\"access_peoplegroups\";b:1;s:17:\"list_peoplegroups\";b:1;s:13:\"access_groups\";b:1;s:13:\"create_groups\";b:1;s:13:\"dt_list_users\";b:1;s:20:\"view_project_metrics\";b:1;s:19:\"assign_any_contacts\";b:1;s:15:\"view_any_groups\";b:1;s:17:\"update_any_groups\";b:1;s:17:\"edit_peoplegroups\";b:1;s:24:\"access_starter_post_type\";b:1;s:24:\"create_starter_post_type\";b:1;s:24:\"update_starter_post_type\";b:1;s:26:\"view_any_starter_post_type\";b:1;s:28:\"update_any_starter_post_type\";b:1;s:21:\"list_all_peoplegroups\";b:1;s:21:\"view_any_peoplegroups\";b:1;s:19:\"create_peoplegroups\";b:1;s:23:\"update_any_peoplegroups\";b:1;}}s:10:\"registered\";a:2:{s:4:\"name\";s:10:\"Registered\";s:12:\"capabilities\";a:0:{}}s:10:\"multiplier\";a:2:{s:4:\"name\";s:10:\"Multiplier\";s:12:\"capabilities\";a:14:{s:4:\"read\";b:1;s:21:\"access_disciple_tools\";b:1;s:15:\"access_contacts\";b:1;s:15:\"create_contacts\";b:1;s:13:\"read_location\";b:1;s:19:\"access_peoplegroups\";b:1;s:17:\"list_peoplegroups\";b:1;s:13:\"access_groups\";b:1;s:13:\"create_groups\";b:1;s:24:\"access_starter_post_type\";b:1;s:24:\"create_starter_post_type\";b:1;s:24:\"update_starter_post_type\";b:1;s:21:\"list_all_peoplegroups\";b:1;s:21:\"view_any_peoplegroups\";b:1;}}s:10:\"strategist\";a:2:{s:4:\"name\";s:10:\"Strategist\";s:12:\"capabilities\";a:2:{s:20:\"view_project_metrics\";b:1;s:21:\"access_disciple_tools\";b:1;}}s:12:\"user_manager\";a:2:{s:4:\"name\";s:12:\"User Manager\";s:12:\"capabilities\";a:20:{s:4:\"read\";b:1;s:21:\"access_disciple_tools\";b:1;s:15:\"access_contacts\";b:1;s:15:\"create_contacts\";b:1;s:13:\"read_location\";b:1;s:19:\"access_peoplegroups\";b:1;s:17:\"list_peoplegroups\";b:1;s:13:\"access_groups\";b:1;s:13:\"create_groups\";b:1;s:13:\"promote_users\";b:1;s:10:\"edit_users\";b:1;s:12:\"create_users\";b:1;s:12:\"delete_users\";b:1;s:10:\"list_users\";b:1;s:13:\"dt_list_users\";b:1;s:24:\"access_starter_post_type\";b:1;s:24:\"create_starter_post_type\";b:1;s:24:\"update_starter_post_type\";b:1;s:21:\"list_all_peoplegroups\";b:1;s:21:\"view_any_peoplegroups\";b:1;}}s:8:\"dt_admin\";a:2:{s:4:\"name\";s:20:\"Disciple.Tools Admin\";s:12:\"capabilities\";a:36:{s:4:\"read\";b:1;s:21:\"access_disciple_tools\";b:1;s:15:\"access_contacts\";b:1;s:15:\"create_contacts\";b:1;s:13:\"read_location\";b:1;s:19:\"access_peoplegroups\";b:1;s:17:\"list_peoplegroups\";b:1;s:13:\"access_groups\";b:1;s:13:\"create_groups\";b:1;s:13:\"promote_users\";b:1;s:10:\"edit_users\";b:1;s:12:\"create_users\";b:1;s:12:\"delete_users\";b:1;s:10:\"list_users\";b:1;s:13:\"dt_list_users\";b:1;s:10:\"list_roles\";b:1;s:12:\"create_roles\";b:1;s:12:\"delete_roles\";b:1;s:10:\"edit_roles\";b:1;s:16:\"restrict_content\";b:1;s:9:\"manage_dt\";b:1;s:20:\"view_project_metrics\";b:1;s:22:\"dt_all_access_contacts\";b:1;s:19:\"assign_any_contacts\";b:1;s:15:\"view_any_groups\";b:1;s:17:\"update_any_groups\";b:1;s:17:\"edit_peoplegroups\";b:1;s:24:\"access_starter_post_type\";b:1;s:24:\"create_starter_post_type\";b:1;s:24:\"update_starter_post_type\";b:1;s:26:\"view_any_starter_post_type\";b:1;s:28:\"update_any_starter_post_type\";b:1;s:21:\"list_all_peoplegroups\";b:1;s:21:\"view_any_peoplegroups\";b:1;s:19:\"create_peoplegroups\";b:1;s:23:\"update_any_peoplegroups\";b:1;}}s:8:\"marketer\";a:2:{s:4:\"name\";s:17:\"Digital Responder\";s:12:\"capabilities\";a:17:{s:4:\"read\";b:1;s:21:\"access_disciple_tools\";b:1;s:15:\"access_contacts\";b:1;s:15:\"create_contacts\";b:1;s:13:\"read_location\";b:1;s:19:\"access_peoplegroups\";b:1;s:17:\"list_peoplegroups\";b:1;s:13:\"access_groups\";b:1;s:13:\"create_groups\";b:1;s:23:\"access_specific_sources\";b:1;s:19:\"assign_any_contacts\";b:1;s:20:\"view_project_metrics\";b:1;s:24:\"access_starter_post_type\";b:1;s:24:\"create_starter_post_type\";b:1;s:24:\"update_starter_post_type\";b:1;s:21:\"list_all_peoplegroups\";b:1;s:21:\"view_any_peoplegroups\";b:1;}}s:7:\"partner\";a:2:{s:4:\"name\";s:7:\"Partner\";s:12:\"capabilities\";a:15:{s:4:\"read\";b:1;s:21:\"access_disciple_tools\";b:1;s:15:\"access_contacts\";b:1;s:15:\"create_contacts\";b:1;s:13:\"read_location\";b:1;s:19:\"access_peoplegroups\";b:1;s:17:\"list_peoplegroups\";b:1;s:13:\"access_groups\";b:1;s:13:\"create_groups\";b:1;s:23:\"access_specific_sources\";b:1;s:24:\"access_starter_post_type\";b:1;s:24:\"create_starter_post_type\";b:1;s:24:\"update_starter_post_type\";b:1;s:21:\"list_all_peoplegroups\";b:1;s:21:\"view_any_peoplegroups\";b:1;}}s:10:\"dispatcher\";a:2:{s:4:\"name\";s:10:\"Dispatcher\";s:12:\"capabilities\";a:21:{s:4:\"read\";b:1;s:21:\"access_disciple_tools\";b:1;s:15:\"access_contacts\";b:1;s:15:\"create_contacts\";b:1;s:13:\"read_location\";b:1;s:19:\"access_peoplegroups\";b:1;s:17:\"list_peoplegroups\";b:1;s:13:\"access_groups\";b:1;s:13:\"create_groups\";b:1;s:22:\"dt_all_access_contacts\";b:1;s:20:\"view_project_metrics\";b:1;s:10:\"list_users\";b:1;s:13:\"dt_list_users\";b:1;s:19:\"assign_any_contacts\";b:1;s:15:\"view_any_groups\";b:1;s:17:\"update_any_groups\";b:1;s:24:\"access_starter_post_type\";b:1;s:24:\"create_starter_post_type\";b:1;s:24:\"update_starter_post_type\";b:1;s:21:\"list_all_peoplegroups\";b:1;s:21:\"view_any_peoplegroups\";b:1;}}s:24:\"network_dashboard_viewer\";a:2:{s:4:\"name\";s:24:\"Network Dashboard Viewer\";s:12:\"capabilities\";a:2:{s:15:\"access_settings\";b:1;s:20:\"view_project_metrics\";b:1;}}}",
        "autoload": "yes"
    },
    {
        "option_id": "96",
        "option_name": "fresh_site",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "97",
        "option_name": "widget_search",
        "option_value": "a:2:{i:2;a:1:{s:5:\"title\";s:0:\"\";}s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "98",
        "option_name": "widget_recent-posts",
        "option_value": "a:2:{i:2;a:2:{s:5:\"title\";s:0:\"\";s:6:\"number\";i:5;}s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "99",
        "option_name": "widget_recent-comments",
        "option_value": "a:2:{i:2;a:2:{s:5:\"title\";s:0:\"\";s:6:\"number\";i:5;}s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "100",
        "option_name": "widget_archives",
        "option_value": "a:2:{i:2;a:3:{s:5:\"title\";s:0:\"\";s:5:\"count\";i:0;s:8:\"dropdown\";i:0;}s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "101",
        "option_name": "widget_meta",
        "option_value": "a:2:{i:2;a:1:{s:5:\"title\";s:0:\"\";}s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "102",
        "option_name": "sidebars_widgets",
        "option_value": "a:2:{s:19:\"wp_inactive_widgets\";a:0:{}s:13:\"array_version\";i:3;}",
        "autoload": "yes"
    },
    {
        "option_id": "103",
        "option_name": "cron",
        "option_value": "a:38:{i:1676756655;a:1:{s:26:\"action_scheduler_run_queue\";a:1:{s:32:\"0d04ed39571b55704c122d726248bbac\";a:3:{s:8:\"schedule\";s:12:\"every_minute\";s:4:\"args\";a:1:{i:0;s:7:\"WP Cron\";}s:8:\"interval\";i:60;}}}i:1676756873;a:1:{s:39:\"wp_queue_connections_databaseconnection\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:39:\"wp_queue_connections_databaseconnection\";s:4:\"args\";a:0:{}s:8:\"interval\";i:300;}}}i:1676757600;a:1:{s:31:\"dt_hourly_notification_schedule\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1676757955;a:1:{s:55:\"puc_cron_check_updates-disciple-tools-network-dashboard\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676758605;a:1:{s:34:\"wp_privacy_delete_old_export_files\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1676758673;a:1:{s:18:\"task_notifications\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1676758749;a:1:{s:18:\"wpo_global_cleanup\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1676759143;a:1:{s:10:\"itsec_cron\";a:1:{s:32:\"12ca8767a64eac20d01836398698c811\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:1:{i:0;s:11:\"flush-files\";}s:8:\"interval\";i:3600;}}}i:1676764800;a:1:{s:30:\"dt_daily_notification_schedule\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676765804;a:3:{s:32:\"recovery_mode_clean_expired_keys\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:17:\"wp_update_plugins\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_update_themes\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676765805;a:3:{s:16:\"wp_version_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:17:\"wp_update_plugins\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_update_themes\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676765853;a:3:{s:19:\"wp_scheduled_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:25:\"delete_expired_transients\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:30:\"wp_scheduled_auto_draft_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676765873;a:2:{s:24:\"error_log_dispatch_email\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:28:\"error_log_retention_enforcer\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676765886;a:1:{s:18:\"wp_https_detection\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676765888;a:1:{s:21:\"wp_update_user_counts\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676768064;a:1:{s:50:\"puc_cron_check_updates-disciple-tools-demo-content\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676768400;a:3:{s:5:\"usage\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"weekly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:604800;}}s:15:\"update-required\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:35:\"dt_network_dashboard_build_snapshot\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676768700;a:1:{s:38:\"dt_network_dashboard_trigger_sites_1am\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676769607;a:1:{s:15:\"itsec_cron_test\";a:1:{s:32:\"4aefad605349bc746cc5c2fdb01737ee\";a:2:{s:8:\"schedule\";b:0;s:4:\"args\";a:1:{i:0;i:1676769607;}}}}i:1676771909;a:1:{s:55:\"puc_cron_check_updates-disciple-tools-mobile-app-plugin\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676772300;a:1:{s:38:\"dt_network_dashboard_trigger_sites_2am\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676775600;a:1:{s:34:\"dt_network_dashboard_push_snapshot\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676775900;a:1:{s:38:\"dt_network_dashboard_trigger_sites_3am\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676777488;a:1:{s:46:\"puc_cron_check_updates-disciple-tools-autolink\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676779500;a:1:{s:38:\"dt_network_dashboard_trigger_sites_4am\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676781000;a:1:{s:49:\"dt_network_dashboard_collect_remote_activity_logs\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676782800;a:1:{s:41:\"dt_network_dashboard_collect_remote_sites\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676782873;a:1:{s:49:\"puc_cron_check_updates_theme-disciple-tools-theme\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676783100;a:1:{s:38:\"dt_network_dashboard_trigger_sites_5am\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676783805;a:1:{s:10:\"itsec_cron\";a:6:{s:32:\"aa768a35ceed34e467f270ebdc5d82f4\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:1:{i:0;s:14:\"purge-lockouts\";}s:8:\"interval\";i:86400;}s:32:\"abcdd2161b38ff88bddcea9ec08412b6\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:1:{i:0;s:28:\"dashboard-consolidate-events\";}s:8:\"interval\";i:86400;}s:32:\"91ed9e6ce3fd2e95cc140964d5c85e55\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:1:{i:0;s:19:\"identify-server-ips\";}s:8:\"interval\";i:86400;}s:32:\"3ec3d6914daf50bcdb5e5b065213e29b\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:1:{i:0;s:17:\"purge-log-entries\";}s:8:\"interval\";i:86400;}s:32:\"7a0fd5d064c59cf40c3df9ad0bb6e63d\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:1:{i:0;s:11:\"clear-locks\";}s:8:\"interval\";i:86400;}s:32:\"c0ae31dfe60fdb9da055aa838519db0f\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:1:{i:0;s:12:\"clear-tokens\";}s:8:\"interval\";i:86400;}}}i:1676785266;a:1:{s:47:\"puc_cron_check_updates-disciple-tools-genmapper\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676785325;a:1:{s:22:\"wpwh_daily_maintenance\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676786400;a:1:{s:35:\"dt_network_dashboard_profile_update\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676786700;a:1:{s:38:\"dt_network_dashboard_trigger_sites_6am\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676797041;a:1:{s:52:\"puc_cron_check_updates-disciple-tools-data-reporting\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1676817684;a:1:{s:15:\"dt_dr_cron_hook\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1676852204;a:1:{s:30:\"wp_site_health_scheduled_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"weekly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:604800;}}}s:7:\"version\";i:2;}",
        "autoload": "yes"
    },
    {
        "option_id": "104",
        "option_name": "widget_pages",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "105",
        "option_name": "widget_calendar",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "106",
        "option_name": "widget_media_audio",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "107",
        "option_name": "widget_media_image",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "108",
        "option_name": "widget_media_gallery",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "109",
        "option_name": "widget_media_video",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "110",
        "option_name": "widget_tag_cloud",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "111",
        "option_name": "widget_nav_menu",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "112",
        "option_name": "widget_custom_html",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "114",
        "option_name": "recovery_keys",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "122",
        "option_name": "theme_mods_twentytwenty",
        "option_value": "a:2:{s:18:\"custom_css_post_id\";i:-1;s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1657412273;s:4:\"data\";a:3:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:3:{i:0;s:8:\"search-2\";i:1;s:14:\"recent-posts-2\";i:2;s:17:\"recent-comments-2\";}s:9:\"sidebar-2\";a:3:{i:0;s:10:\"archives-2\";i:1;s:12:\"categories-2\";i:2;s:6:\"meta-2\";}}}}",
        "autoload": "yes"
    },
    {
        "option_id": "126",
        "option_name": "auto_core_update_notified",
        "option_value": "a:4:{s:4:\"type\";s:7:\"success\";s:5:\"email\";s:16:\"zdmc23@gmail.com\";s:7:\"version\";s:5:\"6.0.3\";s:9:\"timestamp\";i:1666106179;}",
        "autoload": "no"
    },
    {
        "option_id": "148",
        "option_name": "current_theme",
        "option_value": "Disciple Tools",
        "autoload": "yes"
    },
    {
        "option_id": "149",
        "option_name": "theme_mods_disciple-tools-theme",
        "option_value": "a:3:{i:0;b:0;s:18:\"nav_menu_locations\";a:0:{}s:18:\"custom_css_post_id\";i:-1;}",
        "autoload": "yes"
    },
    {
        "option_id": "150",
        "option_name": "theme_switched",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "151",
        "option_name": "dt_roles_number",
        "option_value": "25",
        "autoload": "yes"
    },
    {
        "option_id": "152",
        "option_name": "dt_custom_roles",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "154",
        "option_name": "dt_site_custom_lists",
        "option_value": "a:7:{s:7:\"version\";i:10;s:11:\"user_fields\";a:7:{s:22:\"dt_user_personal_phone\";a:5:{s:5:\"label\";s:14:\"Personal Phone\";s:3:\"key\";s:22:\"dt_user_personal_phone\";s:4:\"type\";s:5:\"phone\";s:11:\"description\";s:60:\"Personal phone is private to the team, not for distribution.\";s:7:\"enabled\";b:1;}s:22:\"dt_user_personal_email\";a:5:{s:5:\"label\";s:14:\"Personal Email\";s:3:\"key\";s:22:\"dt_user_personal_email\";s:4:\"type\";s:5:\"email\";s:11:\"description\";s:60:\"Personal email is private to the team, not for distribution.\";s:7:\"enabled\";b:1;}s:24:\"dt_user_personal_address\";a:5:{s:5:\"label\";s:16:\"Personal Address\";s:3:\"key\";s:24:\"dt_user_personal_address\";s:4:\"type\";s:7:\"address\";s:11:\"description\";s:62:\"Personal address is private to the team, not for distribution.\";s:7:\"enabled\";b:1;}s:18:\"dt_user_work_phone\";a:5:{s:5:\"label\";s:10:\"Work Phone\";s:3:\"key\";s:18:\"dt_user_work_phone\";s:4:\"type\";s:5:\"phone\";s:11:\"description\";s:55:\"Work phone is for distribution to contacts and seekers.\";s:7:\"enabled\";b:1;}s:18:\"dt_user_work_email\";a:5:{s:5:\"label\";s:10:\"Work Email\";s:3:\"key\";s:18:\"dt_user_work_email\";s:4:\"type\";s:5:\"email\";s:11:\"description\";s:55:\"Work email is for distribution to contacts and seekers.\";s:7:\"enabled\";b:1;}s:21:\"dt_user_work_facebook\";a:5:{s:5:\"label\";s:13:\"Work Facebook\";s:3:\"key\";s:21:\"dt_user_work_facebook\";s:4:\"type\";s:6:\"social\";s:11:\"description\";s:58:\"Work Facebook is for distribution to contacts and seekers.\";s:7:\"enabled\";b:0;}s:21:\"dt_user_work_whatsapp\";a:5:{s:5:\"label\";s:13:\"Work WhatsApp\";s:3:\"key\";s:21:\"dt_user_work_whatsapp\";s:4:\"type\";s:5:\"other\";s:11:\"description\";s:58:\"Work WhatsApp is for distribution to contacts and seekers.\";s:7:\"enabled\";b:0;}}s:24:\"comment_reaction_options\";a:6:{s:9:\"thumbs_up\";a:3:{s:4:\"name\";s:9:\"thumbs up\";s:4:\"path\";s:68:\"https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png\";s:5:\"emoji\";s:4:\"👍\";}s:5:\"heart\";a:3:{s:4:\"name\";s:5:\"heart\";s:4:\"path\";s:67:\"https://github.githubassets.com/images/icons/emoji/unicode/2764.png\";s:5:\"emoji\";s:6:\"❤️\";}s:5:\"laugh\";a:3:{s:4:\"name\";s:5:\"laugh\";s:4:\"path\";s:68:\"https://github.githubassets.com/images/icons/emoji/unicode/1f604.png\";s:5:\"emoji\";s:4:\"😄\";}s:3:\"wow\";a:3:{s:4:\"name\";s:3:\"wow\";s:4:\"path\";s:68:\"https://github.githubassets.com/images/icons/emoji/unicode/1f62e.png\";s:5:\"emoji\";s:4:\"😮\";}s:3:\"sad\";a:3:{s:4:\"name\";s:3:\"sad\";s:4:\"path\";s:68:\"https://github.githubassets.com/images/icons/emoji/unicode/1f615.png\";s:5:\"emoji\";s:4:\"😟\";}s:6:\"prayer\";a:3:{s:4:\"name\";s:6:\"prayer\";s:4:\"path\";s:68:\"https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png\";s:5:\"emoji\";s:4:\"🙏\";}}s:7:\"sources\";a:0:{}s:21:\"contact_address_types\";a:3:{s:4:\"home\";a:1:{s:5:\"label\";s:4:\"Home\";}s:4:\"work\";a:1:{s:5:\"label\";s:4:\"Work\";}s:5:\"other\";a:1:{s:5:\"label\";s:5:\"Other\";}}s:17:\"group_preferences\";a:2:{s:14:\"church_metrics\";b:1;s:11:\"four_fields\";b:0;}s:20:\"user_workload_status\";a:3:{s:6:\"active\";a:2:{s:5:\"label\";s:22:\"Accepting new contacts\";s:5:\"color\";s:7:\"#4caf50\";}s:8:\"existing\";a:2:{s:5:\"label\";s:39:\"I'm only investing in existing contacts\";s:5:\"color\";s:7:\"#ff9800\";}s:8:\"too_many\";a:2:{s:5:\"label\";s:24:\"I have too many contacts\";s:5:\"color\";s:7:\"#F43636\";}}}",
        "autoload": "yes"
    },
    {
        "option_id": "155",
        "option_name": "dt_site_options",
        "option_value": "a:6:{s:7:\"version\";s:1:\"9\";s:13:\"notifications\";a:2:{s:8:\"channels\";a:2:{s:5:\"email\";a:1:{s:5:\"label\";s:5:\"Email\";}s:3:\"web\";a:1:{s:5:\"label\";s:3:\"Web\";}}s:5:\"types\";a:6:{s:12:\"new_assigned\";a:3:{s:5:\"label\";s:22:\"Newly Assigned Contact\";s:3:\"web\";b:1;s:5:\"email\";b:1;}s:8:\"mentions\";a:3:{s:5:\"label\";s:9:\"@Mentions\";s:3:\"web\";b:1;s:5:\"email\";b:1;}s:8:\"comments\";a:3:{s:5:\"label\";s:12:\"New Comments\";s:3:\"web\";b:0;s:5:\"email\";b:0;}s:7:\"updates\";a:3:{s:5:\"label\";s:13:\"Update Needed\";s:3:\"web\";b:1;s:5:\"email\";b:1;}s:7:\"changes\";a:3:{s:5:\"label\";s:20:\"Contact Info Changed\";s:3:\"web\";b:0;s:5:\"email\";b:0;}s:10:\"milestones\";a:3:{s:5:\"label\";s:43:\"Contact Milestones and Group Health metrics\";s:3:\"web\";b:0;s:5:\"email\";b:0;}}}s:13:\"daily_reports\";a:8:{s:25:\"build_report_for_contacts\";b:1;s:23:\"build_report_for_groups\";b:1;s:25:\"build_report_for_facebook\";b:0;s:24:\"build_report_for_twitter\";b:0;s:26:\"build_report_for_analytics\";b:0;s:24:\"build_report_for_adwords\";b:0;s:26:\"build_report_for_mailchimp\";b:0;s:24:\"build_report_for_youtube\";b:0;}s:15:\"update_required\";a:2:{s:7:\"enabled\";b:1;s:7:\"options\";a:7:{i:0;a:4:{s:6:\"status\";s:6:\"active\";s:11:\"seeker_path\";s:4:\"none\";s:4:\"days\";i:3;s:7:\"comment\";s:97:\"This contact is active but there is no record of anybody contacting them. Please do contact them.\";}i:1;a:4:{s:6:\"status\";s:6:\"active\";s:11:\"seeker_path\";s:9:\"attempted\";s:4:\"days\";i:7;s:7:\"comment\";s:46:\"Please try connecting with this contact again.\";}i:2;a:4:{s:6:\"status\";s:6:\"active\";s:11:\"seeker_path\";s:11:\"established\";s:4:\"days\";i:30;s:7:\"comment\";s:86:\"We haven't heard about this person in a while. Do you have an update for this contact?\";}i:3;a:4:{s:6:\"status\";s:6:\"active\";s:11:\"seeker_path\";s:9:\"scheduled\";s:4:\"days\";i:30;s:7:\"comment\";s:86:\"We haven't heard about this person in a while. Do you have an update for this contact?\";}i:4;a:4:{s:6:\"status\";s:6:\"active\";s:11:\"seeker_path\";s:3:\"met\";s:4:\"days\";i:30;s:7:\"comment\";s:86:\"We haven't heard about this person in a while. Do you have an update for this contact?\";}i:5;a:4:{s:6:\"status\";s:6:\"active\";s:11:\"seeker_path\";s:7:\"ongoing\";s:4:\"days\";i:30;s:7:\"comment\";s:86:\"We haven't heard about this person in a while. Do you have an update for this contact?\";}i:6;a:4:{s:6:\"status\";s:6:\"active\";s:11:\"seeker_path\";s:8:\"coaching\";s:4:\"days\";i:30;s:7:\"comment\";s:86:\"We haven't heard about this person in a while. Do you have an update for this contact?\";}}}s:21:\"group_update_required\";a:2:{s:7:\"enabled\";b:1;s:7:\"options\";a:1:{i:0;a:3:{s:6:\"status\";s:6:\"active\";s:4:\"days\";i:30;s:7:\"comment\";s:68:\"We haven't heard about this group in a while. Do you have an update?\";}}}s:17:\"group_preferences\";a:2:{s:14:\"church_metrics\";b:1;s:11:\"four_fields\";b:0;}}",
        "autoload": "yes"
    },
    {
        "option_id": "158",
        "option_name": "dt_migration_lock",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "159",
        "option_name": "dt_migration_number",
        "option_value": "46",
        "autoload": "yes"
    },
    {
        "option_id": "160",
        "option_name": "dt_base_user",
        "option_value": "1",
        "autoload": "no"
    },
    {
        "option_id": "161",
        "option_name": "dt_location_levels",
        "option_value": "a:3:{s:7:\"version\";i:3;s:15:\"location_levels\";a:7:{s:7:\"country\";i:1;s:27:\"administrative_area_level_1\";i:1;s:27:\"administrative_area_level_2\";i:1;s:27:\"administrative_area_level_3\";i:0;s:27:\"administrative_area_level_4\";i:0;s:8:\"locality\";i:0;s:12:\"neighborhood\";i:0;}s:22:\"location_levels_labels\";a:7:{s:7:\"country\";s:7:\"Country\";s:27:\"administrative_area_level_1\";s:37:\"Admin Level 1 (ex. state / province) \";s:27:\"administrative_area_level_2\";s:26:\"Admin Level 2 (ex. county)\";s:27:\"administrative_area_level_3\";s:13:\"Admin Level 3\";s:27:\"administrative_area_level_4\";s:13:\"Admin Level 4\";s:8:\"locality\";s:24:\"Locality (ex. city name)\";s:12:\"neighborhood\";s:12:\"Neighborhood\";}}",
        "autoload": "yes"
    },
    {
        "option_id": "162",
        "option_name": "dt_field_customizations",
        "option_value": "https://roommate-hitting-temporarily-liberal.trycloudflare.com",
        "autoload": "yes"
    },
    {
        "option_id": "163",
        "option_name": "dt_site_id",
        "option_value": "518bf098c83f2183ecaa53adedb053acc9611b00038f9383b8c03736fa810aaa",
        "autoload": "yes"
    },
    {
        "option_id": "164",
        "option_name": "puc_external_updates_theme-disciple-tools-theme",
        "option_value": "O:8:\"stdClass\":5:{s:9:\"lastCheck\";i:1676747072;s:14:\"checkedVersion\";s:6:\"1.36.0\";s:6:\"update\";O:8:\"stdClass\":5:{s:4:\"slug\";s:20:\"disciple-tools-theme\";s:7:\"version\";s:6:\"1.36.0\";s:12:\"download_url\";s:103:\"https://github.com/DiscipleTools/disciple-tools-theme/releases/download/1.36.0/disciple-tools-theme.zip\";s:12:\"translations\";a:0:{}s:11:\"details_url\";s:63:\"https://discipletools.github.io/disciple-tools-version-control/\";}s:11:\"updateClass\";s:22:\"Puc_v4p10_Theme_Update\";s:15:\"updateBaseClass\";s:12:\"Theme_Update\";}",
        "autoload": "no"
    },
    {
        "option_id": "165",
        "option_name": "dt_locations_migrated_to_location_grid",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "167",
        "option_name": "dt_mapping_migration_list",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "168",
        "option_name": "widget_block",
        "option_value": "a:1:{s:12:\"_multiwidget\";i:1;}",
        "autoload": "yes"
    },
    {
        "option_id": "169",
        "option_name": "disallowed_keys",
        "option_value": "",
        "autoload": "no"
    },
    {
        "option_id": "170",
        "option_name": "comment_previously_approved",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "171",
        "option_name": "auto_plugin_theme_update_emails",
        "option_value": "a:0:{}",
        "autoload": "no"
    },
    {
        "option_id": "172",
        "option_name": "auto_update_core_dev",
        "option_value": "enabled",
        "autoload": "yes"
    },
    {
        "option_id": "173",
        "option_name": "auto_update_core_minor",
        "option_value": "enabled",
        "autoload": "yes"
    },
    {
        "option_id": "174",
        "option_name": "auto_update_core_major",
        "option_value": "unset",
        "autoload": "yes"
    },
    {
        "option_id": "175",
        "option_name": "wp_force_deactivated_plugins",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "176",
        "option_name": "finished_updating_comment_type",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "177",
        "option_name": "user_count",
        "option_value": "9",
        "autoload": "no"
    },
    {
        "option_id": "178",
        "option_name": "db_upgraded",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "185",
        "option_name": "recently_activated",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "191",
        "option_name": "external_updates-disciple-tools-demo-content",
        "option_value": "O:8:\"stdClass\":5:{s:9:\"lastCheck\";i:1676747072;s:14:\"checkedVersion\";s:5:\"0.6.3\";s:6:\"update\";O:8:\"stdClass\":11:{s:4:\"slug\";s:27:\"disciple-tools-demo-content\";s:7:\"version\";s:5:\"0.6.3\";s:12:\"download_url\";s:117:\"https://github.com/DiscipleTools/disciple-tools-demo-content/releases/latest/download/disciple-tools-demo-content.zip\";s:12:\"translations\";a:0:{}s:2:\"id\";i:0;s:8:\"homepage\";s:60:\"https://github.com/DiscipleTools/disciple-tools-demo-content\";s:6:\"tested\";s:7:\"5.6.999\";s:12:\"requires_php\";N;s:14:\"upgrade_notice\";s:35:\"Upgrade to get the latest features.\";s:5:\"icons\";a:0:{}s:8:\"filename\";s:59:\"disciple-tools-demo-content/disciple-tools-demo-content.php\";}s:11:\"updateClass\";s:23:\"Puc_v4p10_Plugin_Update\";s:15:\"updateBaseClass\";s:13:\"Plugin_Update\";}",
        "autoload": "no"
    },
    {
        "option_id": "194",
        "option_name": "my_jwt_key",
        "option_value": "$2y$10$pqRxKbw.GZL9sq2dFGJVUOrOnW5F.a6ZERRZ2nE/5/XsKJdcs32uC",
        "autoload": "yes"
    },
    {
        "option_id": "195",
        "option_name": "external_updates-disciple-tools-mobile-app-plugin",
        "option_value": "O:8:\"stdClass\":5:{s:9:\"lastCheck\";i:1676747072;s:14:\"checkedVersion\";s:7:\"v1.15.1\";s:6:\"update\";O:8:\"stdClass\":11:{s:4:\"slug\";s:32:\"disciple-tools-mobile-app-plugin\";s:7:\"version\";s:7:\"v1.15.1\";s:12:\"download_url\";s:127:\"https://github.com/DiscipleTools/disciple-tools-mobile-app-plugin/releases/latest/download/disciple-tools-mobile-app-plugin.zip\";s:12:\"translations\";a:0:{}s:2:\"id\";i:0;s:8:\"homepage\";s:65:\"https://github.com/DiscipleTools/disciple-tools-mobile-app-plugin\";s:6:\"tested\";s:7:\"5.6.999\";s:12:\"requires_php\";N;s:14:\"upgrade_notice\";s:35:\"Upgrade to get the latest features.\";s:5:\"icons\";a:0:{}s:8:\"filename\";s:69:\"disciple-tools-mobile-app-plugin/disciple-tools-mobile-app-plugin.php\";}s:11:\"updateClass\";s:23:\"Puc_v4p10_Plugin_Update\";s:15:\"updateBaseClass\";s:13:\"Plugin_Update\";}",
        "autoload": "no"
    },
    {
        "option_id": "198",
        "option_name": "https_detection_errors",
        "option_value": "a:1:{s:19:\"bad_response_source\";a:1:{i:0;s:55:\"It looks like the response did not come from this site.\";}}",
        "autoload": "yes"
    },
    {
        "option_id": "203",
        "option_name": "wo_options",
        "option_value": "a:20:{s:7:\"enabled\";i:0;s:16:\"client_id_length\";i:30;s:17:\"auth_code_enabled\";i:0;s:20:\"client_creds_enabled\";i:0;s:18:\"user_creds_enabled\";i:0;s:22:\"refresh_tokens_enabled\";i:0;s:18:\"jwt_bearer_enabled\";i:0;s:16:\"implicit_enabled\";i:0;s:26:\"require_exact_redirect_uri\";i:0;s:13:\"enforce_state\";i:0;s:22:\"refresh_token_lifetime\";i:86400;s:21:\"access_token_lifetime\";i:3600;s:18:\"use_openid_connect\";i:0;s:17:\"id_token_lifetime\";i:3600;s:12:\"token_length\";i:40;s:4:\"beta\";i:0;s:38:\"block_all_unauthenticated_rest_request\";i:0;s:15:\"home_url_modify\";i:0;s:17:\"enable_ssl_verify\";i:0;s:12:\"enforce_pkce\";i:0;}",
        "autoload": "yes"
    },
    {
        "option_id": "204",
        "option_name": "wpoauth_version",
        "option_value": "4.2.2",
        "autoload": "yes"
    },
    {
        "option_id": "205",
        "option_name": "wp_oauth_activation_time",
        "option_value": "1657412349",
        "autoload": "yes"
    },
    {
        "option_id": "206",
        "option_name": "wp_oauth_server_db_version",
        "option_value": "44203",
        "autoload": "yes"
    },
    {
        "option_id": "213",
        "option_name": "dt_demo_sample_data",
        "option_value": "1",
        "autoload": "no"
    },
    {
        "option_id": "214",
        "option_name": "dt_demo_hide_popup",
        "option_value": "1",
        "autoload": "no"
    },
    {
        "option_id": "221",
        "option_name": "WPLANG",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "222",
        "option_name": "new_admin_email",
        "option_value": "zdmc23@gmail.com",
        "autoload": "yes"
    },
    {
        "option_id": "238",
        "option_name": "dt_email_base_address",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "239",
        "option_name": "dt_email_base_name",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "665",
        "option_name": "_transient_health-check-site-status-result",
        "option_value": "{\"good\":\"19\",\"recommended\":\"3\",\"critical\":\"1\"}",
        "autoload": "yes"
    },
    {
        "option_id": "909",
        "option_name": "dt_location_grid_mirror",
        "option_value": "a:3:{s:3:\"key\";s:6:\"google\";s:5:\"label\";s:6:\"Google\";s:3:\"url\";s:55:\"https://storage.googleapis.com/location-grid-mirror-v2/\";}",
        "autoload": "yes"
    },
    {
        "option_id": "910",
        "option_name": "dt_mapping_module_starting_map_level",
        "option_value": "a:3:{s:4:\"type\";s:5:\"world\";s:6:\"parent\";s:5:\"world\";s:8:\"children\";a:0:{}}",
        "autoload": "no"
    },
    {
        "option_id": "911",
        "option_name": "can_compress_scripts",
        "option_value": "0",
        "autoload": "no"
    },
    {
        "option_id": "921",
        "option_name": "fs_active_plugins",
        "option_value": "O:8:\"stdClass\":3:{s:7:\"plugins\";a:1:{s:23:\"wp-data-access/freemius\";O:8:\"stdClass\":4:{s:7:\"version\";s:5:\"2.5.3\";s:4:\"type\";s:6:\"plugin\";s:9:\"timestamp\";i:1675297986;s:11:\"plugin_path\";s:33:\"wp-data-access/wp-data-access.php\";}}s:7:\"abspath\";s:14:\"/var/www/html/\";s:6:\"newest\";O:8:\"stdClass\":5:{s:11:\"plugin_path\";s:33:\"wp-data-access/wp-data-access.php\";s:8:\"sdk_path\";s:23:\"wp-data-access/freemius\";s:7:\"version\";s:5:\"2.5.3\";s:13:\"in_activation\";b:0;s:9:\"timestamp\";i:1675297986;}}",
        "autoload": "yes"
    },
    {
        "option_id": "922",
        "option_name": "fs_debug_mode",
        "option_value": "",
        "autoload": "yes"
    },
    {
        "option_id": "923",
        "option_name": "fs_accounts",
        "option_value": "a:6:{s:21:\"id_slug_type_path_map\";a:1:{i:6189;a:3:{s:4:\"slug\";s:14:\"wp-data-access\";s:4:\"type\";s:6:\"plugin\";s:4:\"path\";s:33:\"wp-data-access/wp-data-access.php\";}}s:11:\"plugin_data\";a:1:{s:14:\"wp-data-access\";a:16:{s:16:\"plugin_main_file\";O:8:\"stdClass\":1:{s:4:\"path\";s:33:\"wp-data-access/wp-data-access.php\";}s:20:\"is_network_activated\";b:0;s:17:\"install_timestamp\";i:1676743189;s:16:\"sdk_last_version\";N;s:11:\"sdk_version\";s:5:\"2.5.3\";s:16:\"sdk_upgrade_mode\";b:1;s:18:\"sdk_downgrade_mode\";b:0;s:19:\"plugin_last_version\";N;s:14:\"plugin_version\";s:5:\"5.3.2\";s:19:\"plugin_upgrade_mode\";b:1;s:21:\"plugin_downgrade_mode\";b:0;s:17:\"was_plugin_loaded\";b:1;s:21:\"is_plugin_new_install\";b:0;s:17:\"connectivity_test\";a:6:{s:12:\"is_connected\";b:1;s:4:\"host\";s:54:\"roommate-hitting-temporarily-liberal.trycloudflare.com\";s:9:\"server_ip\";s:10:\"172.18.0.2\";s:9:\"is_active\";b:1;s:9:\"timestamp\";i:1676743206;s:7:\"version\";s:5:\"5.3.2\";}s:15:\"prev_is_premium\";b:0;s:18:\"sticky_optin_added\";b:1;}}s:13:\"file_slug_map\";a:1:{s:33:\"wp-data-access/wp-data-access.php\";s:14:\"wp-data-access\";}s:7:\"plugins\";a:1:{s:14:\"wp-data-access\";O:9:\"FS_Plugin\":23:{s:16:\"parent_plugin_id\";N;s:5:\"title\";s:14:\"WP Data Access\";s:4:\"slug\";s:14:\"wp-data-access\";s:12:\"premium_slug\";s:22:\"wp-data-access-premium\";s:4:\"type\";s:6:\"plugin\";s:20:\"affiliate_moderation\";b:0;s:19:\"is_wp_org_compliant\";b:1;s:22:\"premium_releases_count\";N;s:4:\"file\";s:33:\"wp-data-access/wp-data-access.php\";s:7:\"version\";s:5:\"5.3.2\";s:11:\"auto_update\";N;s:4:\"info\";N;s:10:\"is_premium\";b:0;s:14:\"premium_suffix\";s:7:\"Premium\";s:7:\"is_live\";b:1;s:9:\"bundle_id\";N;s:17:\"bundle_public_key\";N;s:10:\"public_key\";s:32:\"pk_fc2d1714ca61c930152f6e326b575\";s:10:\"secret_key\";N;s:2:\"id\";s:4:\"6189\";s:7:\"updated\";N;s:7:\"created\";N;s:22:\"\u0000FS_Entity\u0000_is_updated\";b:0;}}s:9:\"unique_id\";s:32:\"e9c3d56f3a4339c9008e6554cd4f224f\";s:13:\"admin_notices\";a:1:{s:14:\"wp-data-access\";a:0:{}}}",
        "autoload": "yes"
    },
    {
        "option_id": "924",
        "option_name": "fs_gdpr",
        "option_value": "a:2:{s:2:\"u1\";a:1:{s:8:\"required\";b:0;}s:2:\"u0\";a:1:{s:8:\"required\";b:0;}}",
        "autoload": "yes"
    },
    {
        "option_id": "925",
        "option_name": "fs_api_cache",
        "option_value": "a:0:{}",
        "autoload": "no"
    },
    {
        "option_id": "928",
        "option_name": "wpda_version",
        "option_value": "5.3.2",
        "autoload": "yes"
    },
    {
        "option_id": "929",
        "option_name": "wpda_show_whats_new",
        "option_value": "on",
        "autoload": "yes"
    },
    {
        "option_id": "930",
        "option_name": "wpda_plugin_sonce_seed",
        "option_value": "e89aec0dbe813d69fc2218b4dfeea5638fd15596a3da38b48cdfeb479bd1fde59c90b6aad4e57f001adb3bd67aadc68877c3a3fd68e77995c243552a",
        "autoload": "yes"
    },
    {
        "option_id": "931",
        "option_name": "wpda_fulltext_support",
        "option_value": "off",
        "autoload": "yes"
    },
    {
        "option_id": "1493",
        "option_name": "auto_update_themes",
        "option_value": "a:1:{i:0;s:20:\"disciple-tools-theme\";}",
        "autoload": "no"
    },
    {
        "option_id": "1499",
        "option_name": "dt_network_dashboard_migration_lock",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "1500",
        "option_name": "dt_network_dashboard_migration_number",
        "option_value": "8",
        "autoload": "yes"
    },
    {
        "option_id": "1501",
        "option_name": "dt_site_profile",
        "option_value": "https://roommate-hitting-temporarily-liberal.trycloudflare.com",
        "autoload": "yes"
    },
    {
        "option_id": "1503",
        "option_name": "external_updates-disciple-tools-network-dashboard",
        "option_value": "O:8:\"stdClass\":5:{s:9:\"lastCheck\";i:1676747072;s:14:\"checkedVersion\";s:5:\"2.9.1\";s:6:\"update\";O:8:\"stdClass\":11:{s:4:\"slug\";s:32:\"disciple-tools-network-dashboard\";s:7:\"version\";s:5:\"2.9.1\";s:12:\"download_url\";s:127:\"https://github.com/DiscipleTools/disciple-tools-network-dashboard/releases/latest/download/disciple-tools-network-dashboard.zip\";s:12:\"translations\";a:0:{}s:2:\"id\";i:0;s:8:\"homepage\";s:65:\"https://github.com/DiscipleTools/disciple-tools-network-dashboard\";s:6:\"tested\";s:7:\"5.6.999\";s:12:\"requires_php\";N;s:14:\"upgrade_notice\";s:35:\"Upgrade to get the latest features.\";s:5:\"icons\";a:0:{}s:8:\"filename\";s:69:\"disciple-tools-network-dashboard/disciple-tools-network-dashboard.php\";}s:11:\"updateClass\";s:23:\"Puc_v4p10_Plugin_Update\";s:15:\"updateBaseClass\";s:13:\"Plugin_Update\";}",
        "autoload": "no"
    },
    {
        "option_id": "1506",
        "option_name": "dt_snapshot_report",
        "option_value": "https://roommate-hitting-temporarily-liberal.trycloudflare.com",
        "autoload": "no"
    },
    {
        "option_id": "1507",
        "option_name": "dt_snapshot_report_timestamp",
        "option_value": "1676699687",
        "autoload": "no"
    },
    {
        "option_id": "1511",
        "option_name": "dt_network_dashboard_webhook_access_token",
        "option_value": "123",
        "autoload": "yes"
    },
    {
        "option_id": "1512",
        "option_name": "dt_network_dashboard_webhook_schedule",
        "option_value": "Once Daily",
        "autoload": "yes"
    },
    {
        "option_id": "1513",
        "option_name": "dt_network_dashboard_webhook_config",
        "option_value": "a:1:{i:0;a:3:{s:7:\"enabled\";b:1;s:3:\"url\";b:0;s:5:\"token\";s:3:\"123\";}}",
        "autoload": "yes"
    },
    {
        "option_id": "1514",
        "option_name": "dt_network_dashboard_webhook_schedule_enabled",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "1783",
        "option_name": "external_updates-disciple-tools-data-reporting",
        "option_value": "O:8:\"stdClass\":5:{s:9:\"lastCheck\";i:1676747072;s:14:\"checkedVersion\";s:5:\"1.5.7\";s:6:\"update\";O:8:\"stdClass\":11:{s:4:\"slug\";s:29:\"disciple-tools-data-reporting\";s:7:\"version\";s:5:\"1.5.7\";s:12:\"download_url\";s:120:\"https://github.com/cairocoder01/disciple-tools-data-reporting/releases/latest/download/disciple-tools-data-reporting.zip\";s:12:\"translations\";a:0:{}s:2:\"id\";i:0;s:8:\"homepage\";s:63:\"https://github.com/Data Reporting/disciple-tools-data-reporting\";s:6:\"tested\";s:5:\"6.1.1\";s:12:\"requires_php\";N;s:14:\"upgrade_notice\";s:40:\"Add limit/offset option in manual export\";s:5:\"icons\";a:0:{}s:8:\"filename\";s:63:\"disciple-tools-data-reporting/disciple-tools-data-reporting.php\";}s:11:\"updateClass\";s:23:\"Puc_v4p10_Plugin_Update\";s:15:\"updateBaseClass\";s:13:\"Plugin_Update\";}",
        "autoload": "no"
    },
    {
        "option_id": "1787",
        "option_name": "dt_data_reporting_configurations",
        "option_value": "https://roommate-hitting-temporarily-liberal.trycloudflare.com",
        "autoload": "yes"
    },
    {
        "option_id": "1788",
        "option_name": "dt_data_reporting_share_global",
        "option_value": "0",
        "autoload": "yes"
    },
    {
        "option_id": "1789",
        "option_name": "dt_data_reporting_configurations_progress",
        "option_value": "{\"default\":{\"groups\":\"2022-08-18 01:27:50\",\"contacts\":\"2022-08-18 20:50:22\",\"contact_activity\":\"2022-11-18 02:04:01\",\"group_activity\":\"2023-02-02 00:31:43\"}}",
        "autoload": "yes"
    },
    {
        "option_id": "1790",
        "option_name": "dt_data_reporting_export_logs",
        "option_value": "{\"default\":{\"contact_activity\":{\"success\":true,\"messages\":[{\"message\":\"Exporting to Make.com\"},{\"message\":\"Fetching data...\"},{\"message\":\"Exporting 9188 items from a total of 9188.\"},{\"message\":\"Sending data to provider...\"},{\"type\":\"success\",\"message\":\"Success\"},{\"message\":\"Data saved to disk.\"}]},\"group_activity\":{\"success\":true,\"messages\":[{\"message\":\"Exporting to Make.com\"},{\"message\":\"Fetching data...\"},{\"message\":\"Exporting 5701 items from a total of 5701.\"},{\"message\":\"Sending data to provider...\"},{\"type\":\"success\",\"message\":\"Success\"},{\"message\":\"Data saved to disk.\"}]}}}",
        "autoload": "yes"
    },
    {
        "option_id": "2072",
        "option_name": "dt_mapping_module_migration_number",
        "option_value": "17",
        "autoload": "yes"
    },
    {
        "option_id": "2136",
        "option_name": "dt_mapping_module_population",
        "option_value": "5000",
        "autoload": "no"
    },
    {
        "option_id": "2264",
        "option_name": "itsec_user_encryption_test",
        "option_value": "$t1$ltxhVG2wxhdWDJzebdaNCG8c+mAYfpojuXeQ36WcRN3QE+HRJk46sJ5VrfJ8/bM4ipOf",
        "autoload": "no"
    },
    {
        "option_id": "2289",
        "option_name": "itsec-storage",
        "option_value": "a:3:{s:6:\"global\";a:35:{s:11:\"write_files\";b:1;s:10:\"nginx_file\";s:24:\"/var/www/html/nginx.conf\";s:14:\"lockout_period\";i:15;s:16:\"blacklist_period\";i:7;s:9:\"blacklist\";b:1;s:15:\"blacklist_count\";i:3;s:15:\"lockout_message\";s:5:\"error\";s:20:\"user_lockout_message\";s:64:\"You have been locked out due to too many invalid login attempts.\";s:25:\"community_lockout_message\";s:77:\"Your IP address has been flagged as a threat by the iThemes Security network.\";s:19:\"automatic_temp_auth\";b:1;s:18:\"lockout_white_list\";a:0:{}s:8:\"log_type\";s:8:\"database\";s:12:\"log_rotation\";i:60;s:17:\"file_log_rotation\";i:180;s:12:\"log_location\";s:54:\"/var/www/html/wp-content/uploads/ithemes-security/logs\";s:5:\"proxy\";s:9:\"automatic\";s:12:\"proxy_header\";s:20:\"HTTP_X_FORWARDED_FOR\";s:14:\"allow_tracking\";b:0;s:14:\"hide_admin_bar\";b:0;s:16:\"show_error_codes\";b:0;s:19:\"enable_grade_report\";b:0;s:5:\"build\";i:4126;s:13:\"initial_build\";i:4126;s:20:\"activation_timestamp\";i:1666295719;s:11:\"cron_status\";i:1;s:8:\"use_cron\";b:1;s:14:\"cron_test_time\";i:1676769607;s:10:\"server_ips\";a:3:{i:0;s:13:\"104.17.123.55\";i:1;s:13:\"104.17.124.55\";i:2;s:15:\"207.172.255.162\";}s:24:\"licensed_hostname_prompt\";b:0;s:16:\"onboard_complete\";b:0;s:13:\"enabled_tools\";a:0:{}s:18:\"enable_remote_help\";b:0;s:13:\"feature_flags\";a:0:{}s:8:\"log_info\";s:0:\"\";s:12:\"manage_group\";a:0:{}}s:10:\"__extended\";a:0:{}s:19:\"notification-center\";a:8:{s:9:\"last_sent\";a:1:{s:6:\"digest\";i:1676699686;}s:9:\"resend_at\";a:0:{}s:4:\"data\";a:1:{s:6:\"digest\";a:0:{}}s:15:\"last_mail_error\";s:0:\"\";s:10:\"from_email\";s:0:\"\";s:18:\"default_recipients\";a:1:{s:9:\"user_list\";a:1:{i:0;s:18:\"role:administrator\";}}s:13:\"notifications\";a:3:{s:6:\"digest\";a:5:{s:8:\"schedule\";s:5:\"daily\";s:7:\"enabled\";b:1;s:9:\"user_list\";a:1:{i:0;s:18:\"role:administrator\";}s:14:\"recipient_type\";s:7:\"default\";s:7:\"subject\";N;}s:7:\"lockout\";a:4:{s:7:\"enabled\";b:1;s:9:\"user_list\";a:1:{i:0;s:18:\"role:administrator\";}s:14:\"recipient_type\";s:7:\"default\";s:7:\"subject\";N;}s:6:\"backup\";a:2:{s:10:\"email_list\";a:1:{i:0;s:16:\"zdmc23@gmail.com\";}s:7:\"subject\";N;}}s:12:\"admin_emails\";a:0:{}}}",
        "autoload": "yes"
    },
    {
        "option_id": "2291",
        "option_name": "itsec_temp_whitelist_ip",
        "option_value": "a:1:{s:15:\"207.172.255.162\";i:1676841334;}",
        "autoload": "no"
    },
    {
        "option_id": "6606",
        "option_name": "_site_transient_update_core",
        "option_value": "O:8:\"stdClass\":4:{s:7:\"updates\";a:1:{i:0;O:8:\"stdClass\":10:{s:8:\"response\";s:6:\"latest\";s:8:\"download\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.1.1.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":5:{s:4:\"full\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.1.1.zip\";s:10:\"no_content\";s:70:\"https://downloads.wordpress.org/release/wordpress-6.1.1-no-content.zip\";s:11:\"new_bundled\";s:71:\"https://downloads.wordpress.org/release/wordpress-6.1.1-new-bundled.zip\";s:7:\"partial\";s:0:\"\";s:8:\"rollback\";s:0:\"\";}s:7:\"current\";s:5:\"6.1.1\";s:7:\"version\";s:5:\"6.1.1\";s:11:\"php_version\";s:6:\"5.6.20\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"6.1\";s:15:\"partial_version\";s:0:\"\";}}s:12:\"last_checked\";i:1676733188;s:15:\"version_checked\";s:5:\"6.1.1\";s:12:\"translations\";a:0:{}}",
        "autoload": "no"
    },
    {
        "option_id": "6617",
        "option_name": "wpda_upgraded",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "6911",
        "option_name": "_site_transient_update_themes",
        "option_value": "O:8:\"stdClass\":5:{s:12:\"last_checked\";i:1676733188;s:7:\"checked\";a:7:{s:20:\"disciple-tools-theme\";s:6:\"1.36.0\";s:14:\"twentynineteen\";s:3:\"2.4\";s:15:\"twentyseventeen\";s:3:\"3.1\";s:12:\"twentytwenty\";s:3:\"2.1\";s:15:\"twentytwentyone\";s:3:\"1.7\";s:17:\"twentytwentythree\";s:3:\"1.0\";s:15:\"twentytwentytwo\";s:3:\"1.3\";}s:8:\"response\";a:0:{}s:9:\"no_update\";a:6:{s:14:\"twentynineteen\";a:6:{s:5:\"theme\";s:14:\"twentynineteen\";s:11:\"new_version\";s:3:\"2.4\";s:3:\"url\";s:44:\"https://wordpress.org/themes/twentynineteen/\";s:7:\"package\";s:60:\"https://downloads.wordpress.org/theme/twentynineteen.2.4.zip\";s:8:\"requires\";s:5:\"4.9.6\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:15:\"twentyseventeen\";a:6:{s:5:\"theme\";s:15:\"twentyseventeen\";s:11:\"new_version\";s:3:\"3.1\";s:3:\"url\";s:45:\"https://wordpress.org/themes/twentyseventeen/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/theme/twentyseventeen.3.1.zip\";s:8:\"requires\";s:3:\"4.7\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:12:\"twentytwenty\";a:6:{s:5:\"theme\";s:12:\"twentytwenty\";s:11:\"new_version\";s:3:\"2.1\";s:3:\"url\";s:42:\"https://wordpress.org/themes/twentytwenty/\";s:7:\"package\";s:58:\"https://downloads.wordpress.org/theme/twentytwenty.2.1.zip\";s:8:\"requires\";s:3:\"4.7\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:15:\"twentytwentyone\";a:6:{s:5:\"theme\";s:15:\"twentytwentyone\";s:11:\"new_version\";s:3:\"1.7\";s:3:\"url\";s:45:\"https://wordpress.org/themes/twentytwentyone/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/theme/twentytwentyone.1.7.zip\";s:8:\"requires\";s:3:\"5.3\";s:12:\"requires_php\";s:3:\"5.6\";}s:17:\"twentytwentythree\";a:6:{s:5:\"theme\";s:17:\"twentytwentythree\";s:11:\"new_version\";s:3:\"1.0\";s:3:\"url\";s:47:\"https://wordpress.org/themes/twentytwentythree/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/theme/twentytwentythree.1.0.zip\";s:8:\"requires\";s:3:\"6.1\";s:12:\"requires_php\";s:3:\"5.6\";}s:15:\"twentytwentytwo\";a:6:{s:5:\"theme\";s:15:\"twentytwentytwo\";s:11:\"new_version\";s:3:\"1.3\";s:3:\"url\";s:45:\"https://wordpress.org/themes/twentytwentytwo/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/theme/twentytwentytwo.1.3.zip\";s:8:\"requires\";s:3:\"5.9\";s:12:\"requires_php\";s:3:\"5.6\";}}s:12:\"translations\";a:0:{}}",
        "autoload": "no"
    },
    {
        "option_id": "6918",
        "option_name": "external_updates-disciple-tools-autolink",
        "option_value": "O:8:\"stdClass\":5:{s:9:\"lastCheck\";i:1676747071;s:14:\"checkedVersion\";s:6:\"0.17.4\";s:6:\"update\";O:8:\"stdClass\":11:{s:4:\"slug\";s:23:\"disciple-tools-autolink\";s:7:\"version\";s:6:\"0.18.0\";s:12:\"download_url\";s:107:\"https://github.com/thecodezone/disciple-tools-autolink/releases/latest/download/disciple-tools-autolink.zip\";s:12:\"translations\";a:0:{}s:2:\"id\";i:0;s:8:\"homepage\";s:54:\"https://github.com/thecodezone/disciple-tools-autolink\";s:6:\"tested\";s:7:\"5.7.999\";s:12:\"requires_php\";N;s:14:\"upgrade_notice\";s:35:\"Upgrade to get the latest features.\";s:5:\"icons\";a:0:{}s:8:\"filename\";s:51:\"disciple-tools-autolink/disciple-tools-autolink.php\";}s:11:\"updateClass\";s:23:\"Puc_v4p10_Plugin_Update\";s:15:\"updateBaseClass\";s:13:\"Plugin_Update\";}",
        "autoload": "no"
    },
    {
        "option_id": "6920",
        "option_name": "auto_update_plugins",
        "option_value": "a:4:{i:0;s:51:\"disciple-tools-autolink/disciple-tools-autolink.php\";i:1;s:63:\"disciple-tools-data-reporting/disciple-tools-data-reporting.php\";i:2;s:69:\"disciple-tools-mobile-app-plugin/disciple-tools-mobile-app-plugin.php\";i:3;s:69:\"disciple-tools-network-dashboard/disciple-tools-network-dashboard.php\";}",
        "autoload": "no"
    },
    {
        "option_id": "6924",
        "option_name": "site_link_system_api_keys",
        "option_value": "a:0:{}",
        "autoload": "yes"
    },
    {
        "option_id": "6947",
        "option_name": "external_updates-disciple-tools-genmapper",
        "option_value": "O:8:\"stdClass\":5:{s:9:\"lastCheck\";i:1676747072;s:14:\"checkedVersion\";s:5:\"1.5.6\";s:6:\"update\";O:8:\"stdClass\":11:{s:4:\"slug\";s:24:\"disciple-tools-genmapper\";s:7:\"version\";s:5:\"1.5.6\";s:12:\"download_url\";s:111:\"https://github.com/DiscipleTools/disciple-tools-genmapper/releases/latest/download/disciple-tools-genmapper.zip\";s:12:\"translations\";a:0:{}s:2:\"id\";i:0;s:8:\"homepage\";s:57:\"https://github.com/DiscipleTools/disciple-tools-genmapper\";s:6:\"tested\";s:7:\"5.6.999\";s:12:\"requires_php\";N;s:14:\"upgrade_notice\";s:35:\"Upgrade to get the latest features.\";s:5:\"icons\";a:0:{}s:8:\"filename\";s:53:\"disciple-tools-genmapper/disciple-tools-genmapper.php\";}s:11:\"updateClass\";s:23:\"Puc_v4p10_Plugin_Update\";s:15:\"updateBaseClass\";s:13:\"Plugin_Update\";}",
        "autoload": "no"
    },
    {
        "option_id": "6990",
        "option_name": "_site_transient_timeout_itsec_wp_upload_dir",
        "option_value": "1676829589",
        "autoload": "no"
    },
    {
        "option_id": "6991",
        "option_name": "_site_transient_itsec_wp_upload_dir",
        "option_value": "a:6:{s:4:\"path\";s:40:\"/var/www/html/wp-content/uploads/2023/02\";s:3:\"url\";s:89:\"https://roommate-hitting-temporarily-liberal.trycloudflare.com/wp-content/uploads/2023/02\";s:6:\"subdir\";s:8:\"/2023/02\";s:7:\"basedir\";s:32:\"/var/www/html/wp-content/uploads\";s:7:\"baseurl\";s:81:\"https://roommate-hitting-temporarily-liberal.trycloudflare.com/wp-content/uploads\";s:5:\"error\";b:0;}",
        "autoload": "no"
    },
    {
        "option_id": "7022",
        "option_name": "_site_transient_timeout_php_check_a272e9aeefb1e80afc3fe92a60810998",
        "option_value": "1677129411",
        "autoload": "no"
    },
    {
        "option_id": "7023",
        "option_name": "_site_transient_php_check_a272e9aeefb1e80afc3fe92a60810998",
        "option_value": "a:5:{s:19:\"recommended_version\";s:3:\"7.4\";s:15:\"minimum_version\";s:6:\"5.6.20\";s:12:\"is_supported\";b:0;s:9:\"is_secure\";b:0;s:13:\"is_acceptable\";b:0;}",
        "autoload": "no"
    },
    {
        "option_id": "7050",
        "option_name": "_site_transient_timeout_browser_f5754063e85a8724fc67bb54d78f221b",
        "option_value": "1677129427",
        "autoload": "no"
    },
    {
        "option_id": "7051",
        "option_name": "_site_transient_browser_f5754063e85a8724fc67bb54d78f221b",
        "option_value": "a:10:{s:4:\"name\";s:6:\"Chrome\";s:7:\"version\";s:14:\"103.0.5060.114\";s:8:\"platform\";s:5:\"Linux\";s:10:\"update_url\";s:29:\"https://www.google.com/chrome\";s:7:\"img_src\";s:43:\"http://s.w.org/images/browsers/chrome.png?1\";s:11:\"img_src_ssl\";s:44:\"https://s.w.org/images/browsers/chrome.png?1\";s:15:\"current_version\";s:2:\"18\";s:7:\"upgrade\";b:0;s:8:\"insecure\";b:0;s:6:\"mobile\";b:0;}",
        "autoload": "no"
    },
    {
        "option_id": "7082",
        "option_name": "action_scheduler_hybrid_store_demarkation",
        "option_value": "142",
        "autoload": "yes"
    },
    {
        "option_id": "7083",
        "option_name": "schema-ActionScheduler_StoreSchema",
        "option_value": "6.0.1676525775",
        "autoload": "yes"
    },
    {
        "option_id": "7084",
        "option_name": "schema-ActionScheduler_LoggerSchema",
        "option_value": "3.0.1676525775",
        "autoload": "yes"
    },
    {
        "option_id": "7085",
        "option_name": "action_scheduler_lock_async-request-runner",
        "option_value": "1676756663",
        "autoload": "yes"
    },
    {
        "option_id": "7100",
        "option_name": "ironikus_webhook_webhooks",
        "option_value": "a:1:{s:6:\"action\";a:1:{s:9:\"main_6159\";a:3:{s:7:\"api_key\";s:64:\"eru6cut9yoixcrarrny9hbtyaxxj3qwdeqdt0bakezys2tkqi8f3qwzvbt5cuxkq\";s:10:\"permission\";s:14:\"manage_options\";s:12:\"date_created\";s:19:\"2023-02-16 15:33:55\";}}}",
        "autoload": "yes"
    },
    {
        "option_id": "7146",
        "option_name": "itsec_remind_me_notices",
        "option_value": "a:1:{s:21:\"insecure-ip-detection\";i:1676561679;}",
        "autoload": "no"
    },
    {
        "option_id": "7147",
        "option_name": "itsec_dismissed_notices",
        "option_value": "a:2:{i:0;s:25:\"network-brute-force-promo\";i:1;s:16:\"enable-site-scan\";}",
        "autoload": "no"
    },
    {
        "option_id": "7167",
        "option_name": "itsec_cron",
        "option_value": "a:2:{s:6:\"single\";a:0:{}s:9:\"recurring\";a:7:{s:11:\"flush-files\";a:1:{s:4:\"data\";a:0:{}}s:14:\"purge-lockouts\";a:1:{s:4:\"data\";a:0:{}}s:28:\"dashboard-consolidate-events\";a:1:{s:4:\"data\";a:0:{}}s:19:\"identify-server-ips\";a:1:{s:4:\"data\";a:0:{}}s:17:\"purge-log-entries\";a:1:{s:4:\"data\";a:0:{}}s:11:\"clear-locks\";a:1:{s:4:\"data\";a:0:{}}s:12:\"clear-tokens\";a:1:{s:4:\"data\";a:0:{}}}}",
        "autoload": "no"
    },
    {
        "option_id": "7287",
        "option_name": "_site_transient_timeout_php_check_990bfacb848fa087bcfc06850f5e4447",
        "option_value": "1677200169",
        "autoload": "no"
    },
    {
        "option_id": "7288",
        "option_name": "_site_transient_php_check_990bfacb848fa087bcfc06850f5e4447",
        "option_value": "a:5:{s:19:\"recommended_version\";s:3:\"7.4\";s:15:\"minimum_version\";s:6:\"5.6.20\";s:12:\"is_supported\";b:1;s:9:\"is_secure\";b:1;s:13:\"is_acceptable\";b:1;}",
        "autoload": "no"
    },
    {
        "option_id": "7302",
        "option_name": "jobplace_installed",
        "option_value": "1676596011",
        "autoload": "yes"
    },
    {
        "option_id": "7303",
        "option_name": "jobplace_version",
        "option_value": "0.7.0",
        "autoload": "yes"
    },
    {
        "option_id": "7304",
        "option_name": "jobplace_job_type_seeder_ran",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "7305",
        "option_name": "jobplace_job_seeder_ran",
        "option_value": "1",
        "autoload": "yes"
    },
    {
        "option_id": "7529",
        "option_name": "action_scheduler_migration_status",
        "option_value": "complete",
        "autoload": "yes"
    },
    {
        "option_id": "7554",
        "option_name": "zz_option_timestamp",
        "option_value": "2023-02-17T04:55:24+00:00",
        "autoload": "yes"
    },
    {
        "option_id": "7761",
        "option_name": "_transient_timeout_get_location_grid_totals",
        "option_value": "1676786087",
        "autoload": "no"
    },
    {
        "option_id": "7762",
        "option_name": "_transient_get_location_grid_totals",
        "option_value": "a:20:{i:0;a:3:{s:7:\"grid_id\";s:9:\"100001091\";s:4:\"type\";s:8:\"churches\";s:5:\"count\";s:1:\"3\";}i:1;a:3:{s:7:\"grid_id\";s:9:\"100024587\";s:4:\"type\";s:8:\"churches\";s:5:\"count\";s:1:\"2\";}i:2;a:3:{s:7:\"grid_id\";s:9:\"100074576\";s:4:\"type\";s:8:\"churches\";s:5:\"count\";s:1:\"2\";}i:3;a:3:{s:7:\"grid_id\";s:9:\"100074576\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:2:\"42\";}i:4;a:3:{s:7:\"grid_id\";s:9:\"100074576\";s:4:\"type\";s:6:\"groups\";s:5:\"count\";s:1:\"1\";}i:5;a:3:{s:7:\"grid_id\";s:9:\"100131318\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"5\";}i:6;a:3:{s:7:\"grid_id\";s:9:\"100241761\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"5\";}i:7;a:3:{s:7:\"grid_id\";s:9:\"100074577\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"1\";}i:8;a:3:{s:7:\"grid_id\";s:9:\"100074578\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"2\";}i:9;a:3:{s:7:\"grid_id\";s:9:\"100074580\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"5\";}i:10;a:3:{s:7:\"grid_id\";s:9:\"100074581\";s:4:\"type\";s:8:\"churches\";s:5:\"count\";s:1:\"1\";}i:11;a:3:{s:7:\"grid_id\";s:9:\"100074581\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"5\";}i:12;a:3:{s:7:\"grid_id\";s:9:\"100074581\";s:4:\"type\";s:6:\"groups\";s:5:\"count\";s:1:\"1\";}i:13;a:3:{s:7:\"grid_id\";s:9:\"100074582\";s:4:\"type\";s:8:\"churches\";s:5:\"count\";s:1:\"1\";}i:14;a:3:{s:7:\"grid_id\";s:9:\"100074582\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"6\";}i:15;a:3:{s:7:\"grid_id\";s:9:\"100074584\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:2:\"21\";}i:16;a:3:{s:7:\"grid_id\";s:9:\"100074587\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"2\";}i:17;a:3:{s:7:\"grid_id\";s:9:\"100074621\";s:4:\"type\";s:8:\"churches\";s:5:\"count\";s:1:\"1\";}i:18;a:3:{s:7:\"grid_id\";s:9:\"100074621\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:1:\"6\";}i:19;a:3:{s:7:\"grid_id\";s:9:\"100074627\";s:4:\"type\";s:8:\"contacts\";s:5:\"count\";s:2:\"21\";}}",
        "autoload": "no"
    },
    {
        "option_id": "7805",
        "option_name": "_site_transient_timeout_theme_roots",
        "option_value": "1676734988",
        "autoload": "no"
    },
    {
        "option_id": "7806",
        "option_name": "_site_transient_theme_roots",
        "option_value": "a:7:{s:20:\"disciple-tools-theme\";s:7:\"/themes\";s:14:\"twentynineteen\";s:7:\"/themes\";s:15:\"twentyseventeen\";s:7:\"/themes\";s:12:\"twentytwenty\";s:7:\"/themes\";s:15:\"twentytwentyone\";s:7:\"/themes\";s:17:\"twentytwentythree\";s:7:\"/themes\";s:15:\"twentytwentytwo\";s:7:\"/themes\";}",
        "autoload": "no"
    },
    {
        "option_id": "7808",
        "option_name": "_site_transient_update_plugins",
        "option_value": "O:8:\"stdClass\":5:{s:12:\"last_checked\";i:1676733190;s:8:\"response\";a:0:{}s:12:\"translations\";a:0:{}s:9:\"no_update\";a:7:{s:37:\"action-scheduler/action-scheduler.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:30:\"w.org/plugins/action-scheduler\";s:4:\"slug\";s:16:\"action-scheduler\";s:6:\"plugin\";s:37:\"action-scheduler/action-scheduler.php\";s:11:\"new_version\";s:5:\"3.5.4\";s:3:\"url\";s:47:\"https://wordpress.org/plugins/action-scheduler/\";s:7:\"package\";s:65:\"https://downloads.wordpress.org/plugin/action-scheduler.3.5.4.zip\";s:5:\"icons\";a:1:{s:7:\"default\";s:60:\"https://s.w.org/plugins/geopattern-icon/action-scheduler.svg\";}s:7:\"banners\";a:0:{}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.2\";}s:19:\"akismet/akismet.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:21:\"w.org/plugins/akismet\";s:4:\"slug\";s:7:\"akismet\";s:6:\"plugin\";s:19:\"akismet/akismet.php\";s:11:\"new_version\";s:5:\"5.0.2\";s:3:\"url\";s:38:\"https://wordpress.org/plugins/akismet/\";s:7:\"package\";s:56:\"https://downloads.wordpress.org/plugin/akismet.5.0.2.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:60:\"https://ps.w.org/akismet/assets/icon-256x256.png?rev=2818463\";s:2:\"1x\";s:60:\"https://ps.w.org/akismet/assets/icon-128x128.png?rev=2818463\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:61:\"https://ps.w.org/akismet/assets/banner-772x250.jpg?rev=479904\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.0\";}s:41:\"better-wp-security/better-wp-security.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:32:\"w.org/plugins/better-wp-security\";s:4:\"slug\";s:18:\"better-wp-security\";s:6:\"plugin\";s:41:\"better-wp-security/better-wp-security.php\";s:11:\"new_version\";s:5:\"8.1.4\";s:3:\"url\";s:49:\"https://wordpress.org/plugins/better-wp-security/\";s:7:\"package\";s:67:\"https://downloads.wordpress.org/plugin/better-wp-security.8.1.4.zip\";s:5:\"icons\";a:3:{s:2:\"2x\";s:71:\"https://ps.w.org/better-wp-security/assets/icon-256x256.png?rev=2698018\";s:2:\"1x\";s:63:\"https://ps.w.org/better-wp-security/assets/icon.svg?rev=2698018\";s:3:\"svg\";s:63:\"https://ps.w.org/better-wp-security/assets/icon.svg?rev=2698018\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:73:\"https://ps.w.org/better-wp-security/assets/banner-772x250.png?rev=2698018\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.9\";}s:31:\"query-monitor/query-monitor.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:27:\"w.org/plugins/query-monitor\";s:4:\"slug\";s:13:\"query-monitor\";s:6:\"plugin\";s:31:\"query-monitor/query-monitor.php\";s:11:\"new_version\";s:6:\"3.11.1\";s:3:\"url\";s:44:\"https://wordpress.org/plugins/query-monitor/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/plugin/query-monitor.3.11.1.zip\";s:5:\"icons\";a:3:{s:2:\"2x\";s:66:\"https://ps.w.org/query-monitor/assets/icon-256x256.png?rev=2301273\";s:2:\"1x\";s:58:\"https://ps.w.org/query-monitor/assets/icon.svg?rev=2056073\";s:3:\"svg\";s:58:\"https://ps.w.org/query-monitor/assets/icon.svg?rev=2056073\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:69:\"https://ps.w.org/query-monitor/assets/banner-1544x500.png?rev=2457098\";s:2:\"1x\";s:68:\"https://ps.w.org/query-monitor/assets/banner-772x250.png?rev=2457098\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"4.9\";}s:27:\"wp-crontrol/wp-crontrol.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:25:\"w.org/plugins/wp-crontrol\";s:4:\"slug\";s:11:\"wp-crontrol\";s:6:\"plugin\";s:27:\"wp-crontrol/wp-crontrol.php\";s:11:\"new_version\";s:6:\"1.15.1\";s:3:\"url\";s:42:\"https://wordpress.org/plugins/wp-crontrol/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/plugin/wp-crontrol.1.15.1.zip\";s:5:\"icons\";a:3:{s:2:\"2x\";s:64:\"https://ps.w.org/wp-crontrol/assets/icon-256x256.png?rev=2455895\";s:2:\"1x\";s:56:\"https://ps.w.org/wp-crontrol/assets/icon.svg?rev=2455895\";s:3:\"svg\";s:56:\"https://ps.w.org/wp-crontrol/assets/icon.svg?rev=2455895\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:67:\"https://ps.w.org/wp-crontrol/assets/banner-1544x500.jpg?rev=2455905\";s:2:\"1x\";s:66:\"https://ps.w.org/wp-crontrol/assets/banner-772x250.jpg?rev=2455905\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"4.2\";}s:33:\"wp-data-access/wp-data-access.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:28:\"w.org/plugins/wp-data-access\";s:4:\"slug\";s:14:\"wp-data-access\";s:6:\"plugin\";s:33:\"wp-data-access/wp-data-access.php\";s:11:\"new_version\";s:5:\"5.3.2\";s:3:\"url\";s:45:\"https://wordpress.org/plugins/wp-data-access/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/plugin/wp-data-access.5.3.2.zip\";s:5:\"icons\";a:1:{s:2:\"1x\";s:67:\"https://ps.w.org/wp-data-access/assets/icon-128x128.png?rev=2766672\";}s:7:\"banners\";a:0:{}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:5:\"4.8.3\";}s:27:\"wp-webhooks/wp-webhooks.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:25:\"w.org/plugins/wp-webhooks\";s:4:\"slug\";s:11:\"wp-webhooks\";s:6:\"plugin\";s:27:\"wp-webhooks/wp-webhooks.php\";s:11:\"new_version\";s:5:\"3.3.1\";s:3:\"url\";s:42:\"https://wordpress.org/plugins/wp-webhooks/\";s:7:\"package\";s:60:\"https://downloads.wordpress.org/plugin/wp-webhooks.3.3.1.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:64:\"https://ps.w.org/wp-webhooks/assets/icon-256x256.jpg?rev=2656397\";s:2:\"1x\";s:64:\"https://ps.w.org/wp-webhooks/assets/icon-128x128.png?rev=2051386\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:67:\"https://ps.w.org/wp-webhooks/assets/banner-1544x500.png?rev=2656397\";s:2:\"1x\";s:66:\"https://ps.w.org/wp-webhooks/assets/banner-772x250.png?rev=2656397\";}s:11:\"banners_rtl\";a:2:{s:2:\"2x\";s:71:\"https://ps.w.org/wp-webhooks/assets/banner-1544x500-rtl.png?rev=2245476\";s:2:\"1x\";s:70:\"https://ps.w.org/wp-webhooks/assets/banner-772x250-rtl.png?rev=2245476\";}s:8:\"requires\";s:3:\"4.7\";}}s:7:\"checked\";a:16:{s:37:\"action-scheduler/action-scheduler.php\";s:5:\"3.5.4\";s:19:\"akismet/akismet.php\";s:5:\"5.0.2\";s:51:\"disciple-tools-autolink/disciple-tools-autolink.php\";s:6:\"0.17.4\";s:59:\"disciple-tools-demo-content/disciple-tools-demo-content.php\";s:5:\"0.6.3\";s:53:\"disciple-tools-genmapper/disciple-tools-genmapper.php\";s:5:\"1.5.6\";s:69:\"disciple-tools-mobile-app-plugin/disciple-tools-mobile-app-plugin.php\";s:7:\"v1.15.1\";s:69:\"disciple-tools-network-dashboard/disciple-tools-network-dashboard.php\";s:5:\"2.9.1\";s:63:\"wp-scheduled-reports/disciple-tools-plugin-starter-template.php\";s:3:\"0.1\";s:63:\"disciple-tools-data-reporting/disciple-tools-data-reporting.php\";s:5:\"1.5.7\";s:41:\"better-wp-security/better-wp-security.php\";s:5:\"8.1.4\";s:31:\"query-monitor/query-monitor.php\";s:6:\"3.11.1\";s:27:\"wp-crontrol/wp-crontrol.php\";s:6:\"1.15.1\";s:33:\"wp-data-access/wp-data-access.php\";s:5:\"5.3.2\";s:35:\"oauth2-provider/wp-oauth-server.php\";s:5:\"4.2.3\";s:26:\"wp-react-kit/job-place.php\";s:5:\"0.7.0\";s:27:\"wp-webhooks/wp-webhooks.php\";s:5:\"3.3.1\";}}",
        "autoload": "no"
    },
    {
        "option_id": "7812",
        "option_name": "_transient_timeout_feed_95c412530dcb03202b547e1980ca342f",
        "option_value": "1676776401",
        "autoload": "no"
    },
    {
        "option_id": "7813",
        "option_name": "_transient_feed_95c412530dcb03202b547e1980ca342f",
        "option_value": "a:4:{s:5:\"child\";a:1:{s:0:\"\";a:1:{s:3:\"rss\";a:1:{i:0;a:6:{s:4:\"data\";s:3:\"\n\n\n\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:7:\"version\";s:3:\"2.0\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:1:{s:0:\"\";a:1:{s:7:\"channel\";a:1:{i:0;a:6:{s:4:\"data\";s:49:\"\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:7:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:29:\"News Archive - Disciple.Tools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:28:\"https://disciple.tools/news/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:0:\"\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:13:\"lastBuildDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Wed, 08 Feb 2023 09:30:57 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:8:\"language\";a:1:{i:0;a:5:{s:4:\"data\";s:5:\"en-US\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:9:\"generator\";a:1:{i:0;a:5:{s:4:\"data\";s:30:\"https://wordpress.org/?v=6.1.1\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"item\";a:10:{i:0;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:21:\"Theme Release v1.36.0\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:50:\"https://disciple.tools/news/theme-release-v1-36-0/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Wed, 08 Feb 2023 09:29:42 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=4179\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:204:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-36-0/\">Theme Release v1.36.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:1996:\"<h2>What's Changed</h2>\n<ul>\n<li>Ability add custom comment types in the WP-Admin</li>\n<li>Fix for locations lookup saving incorrect place.</li>\n<li>Fix being able to create a comment reaction by a different user.</li>\n<li>Fix unwanted notifications being sent to other users on a multisite.</li>\n<li>Notice to install mapbox key to view all maps.</li>\n</ul>\n<h2>Developer Updates</h2>\n<ul>\n<li>Including the JWT authentication package in the theme core.</li>\n<li>Site links API key option.</li>\n</ul>\n<h2>Details</h2>\n<h3>Ability add custom comment types</h3>\n<p>In WP-Admain &gt; Settings (D.T) &gt; Custom Lists &gt; Contact Comment Types\nWe now have the ability to add customize comment types for Contacts:</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/217487575-d20dcd14-d0bd-4ec5-8d41-e8bced23a00e.png\" alt=\"image\" /></p>\n<p>Will let us create a comment with the \"Praise\" comment type.</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/217488222-5a0496a6-8092-42bf-93a1-c3bf1292980e.png\" alt=\"image\" /></p>\n<p>Which we can then filter for:</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/217488517-b17bdcf2-b60e-4233-9d6e-4693d403b337.png\" alt=\"image\" /></p>\n<h3>Site links API key option</h3>\n<p>Enabling \"Use Token As API Key\" will let the token be used directly instead of needing to create a hash including the current time.\nThis makes interacting with the D.T API easier.</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/217489148-af284d8f-21d5-4b35-913a-78a5d04631d3.png\" alt=\"image\" /></p>\n<p><strong>Full Changelog</strong>: <a href=\"https://github.com/DiscipleTools/disciple-tools-theme/compare/1.35.1...1.36.0\">https://github.com/DiscipleTools/disciple-tools-theme/compare/1.35.1...1.36.0</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-36-0/\">Theme Release v1.36.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:1;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:37:\"Prayer Campaigns V.2 and Ramadan 2023\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:66:\"https://disciple.tools/news/prayer-campaigns-v-2-and-ramadan-2023/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Fri, 27 Jan 2023 15:21:07 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=4174\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:236:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/prayer-campaigns-v-2-and-ramadan-2023/\">Prayer Campaigns V.2 and Ramadan 2023</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:1713:\"<h2>Prayer Campaigns v2</h2>\n<p>We are happy to announce that in this new version the Prayer Campaigns plugin is ready for Ramadan 2023 and Ongoing Prayer Campaigns.</p>\n<h2>Ongoing prayer campaigns</h2>\n<p>We could already create prayer campaigns for fixed time periods (like Ramadan). But more than a month wasn't ideal.<br />\nWith v2 we have introduced \"ongoing\" prayer campaigns. Set a start date, no end end, and see how many people we can mobilize to pray.<br />\nPrayer \"warriors\" will be able to sign up for 3 months and then have the opportunity to extend and keep on praying.  </p>\n<h2>Ramadan 2023</h2>\n<p>We'd like to take this opportunity to invite you to join in praying and mobilizing prayer for the Muslim world during Ramadan in 2023.</p>\n<p>To mobilize 27/4 prayer for the people or place God has put on your heart the process involves:</p>\n<ol>\n<li>Signing up on <a href=\"https://campaigns.pray4movement.org\">https://campaigns.pray4movement.org</a></li>\n<li>Customizing your page </li>\n<li>Inviting your network to pray</li>\n</ol>\n<p>See <a href=\"https://pray4movement.org/ramadan-champions-2023/\">https://pray4movement.org/ramadan-champions-2023/</a> for more details or join one of the existing networks here: <a href=\"https://pray4movement.org/ramadan-2023/\">https://pray4movement.org/ramadan-2023/</a></p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/215741059-833b4b87-ec2e-4db2-a6f4-15ba6b671464.jpg\" alt=\"Ad-Ramadan2023-new1\" /></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/prayer-campaigns-v-2-and-ramadan-2023/\">Prayer Campaigns V.2 and Ramadan 2023</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:2;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:21:\"Theme Release v1.35.0\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:50:\"https://disciple.tools/news/theme-release-v1-35-0/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Thu, 19 Jan 2023 11:01:12 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=4165\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:204:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-35-0/\">Theme Release v1.35.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:856:\"<h2>What's Changed</h2>\n<ul>\n<li>Ability to delete a workflow by @kodinkat </li>\n<li>Icon for system activity in record comments section by @kodinkat </li>\n</ul>\n<h2>Fixes</h2>\n<ul>\n<li>Function improvements on Maping, Icon selector and Migrations </li>\n</ul>\n<h2>Details</h2>\n<h3>System Activity Icon</h3>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/213425108-6039a433-bea5-4af2-b114-e572c34865fc.png\" alt=\"image\" /></p>\n<p><strong>Full Changelog</strong>: <a href=\"https://github.com/DiscipleTools/disciple-tools-theme/compare/1.34.0...1.35.0\">https://github.com/DiscipleTools/disciple-tools-theme/compare/1.34.0...1.35.0</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-35-0/\">Theme Release v1.35.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:3;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:21:\"Theme Release v1.34.0\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:50:\"https://disciple.tools/news/theme-release-v1-34-0/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Fri, 09 Dec 2022 13:48:50 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=4142\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:204:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-34-0/\">Theme Release v1.34.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:2124:\"<h2>New Features</h2>\n<ul>\n<li>Avoid duplicates on Contact creation with duplicate checker by @prykon </li>\n<li>Create Roles with default post type permissions</li>\n</ul>\n<h2>Fixes</h2>\n<ul>\n<li>Fix language label for Romanian</li>\n<li>Fix WP Admin font icon picker not loading</li>\n<li>Fix searching for comments in list view</li>\n<li>Unblock <code>/wp/v2/users/me</code> for some plugins to work better (iThemes Security).</li>\n</ul>\n<h2>Development upgrades</h2>\n<ul>\n<li>Add dev key option to site links to be reference by plugins</li>\n</ul>\n<h2>Details</h2>\n<h3>Contact Creation Duplicate Checker</h3>\n<p>We now check if another contact already exists for a certain email in order to avoid creating duplicate contacts. Also works with phone numbers.\n<img src=\"https://user-images.githubusercontent.com/36511666/206713721-980470ff-0da4-4341-b8ad-6f259073f21e.gif\" alt=\"duplicate-emails\" /></p>\n<h3>Create Roles with default post type permissions</h3>\n<p>We made it easier to create <a href=\"https://disciple.tools/user-docs/features/role-and-capabilities-manager/\">custom roles</a> with specific permissions for all the record types (contacts, groups, trainings, etc).\n<img src=\"https://user-images.githubusercontent.com/24901539/206687167-f1a7619c-a7bf-4547-960d-5411a886b1eb.png\" alt=\"image\" /></p>\n<h3>Site link dev key (developer)</h3>\n<p>Add a custom key to the site link configuration. This lets a plugin find its needed site link\n<img src=\"https://user-images.githubusercontent.com/24901539/206688281-7ac8844a-9287-473b-b282-8fa6eeb0e07e.png\" alt=\"image\" /></p>\n<pre><code>$site_keys = Site_Link_System::instance()::get_site_keys();\n//filter for site_key['dev_key'] === 'your_dev_key';</code></pre>\n<p><strong>Full Changelog</strong>: <a href=\"https://github.com/DiscipleTools/disciple-tools-theme/compare/1.33.0...1.34.0\">https://github.com/DiscipleTools/disciple-tools-theme/compare/1.33.0...1.34.0</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-34-0/\">Theme Release v1.34.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:4;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:29:\"Disciple.Tools Summit Summary\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:58:\"https://disciple.tools/news/disciple-tools-summit-summary/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Thu, 08 Dec 2022 11:08:55 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=3937\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:728:\"<p>In October, we held the first ever Disciple.Tools Summit. It was a great experimental gathering that we intend to repeat in the future. We want to share what happened, what the community thought about it and invite you into the conversation. Sign up to be notified about future events at Disciple.Tools/summit. We&#8217;ve captured all the<a class=\"excerpt-read-more\" href=\"https://disciple.tools/news/disciple-tools-summit-summary/\" title=\"ReadDisciple.Tools Summit Summary\">... Read more &#187;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/disciple-tools-summit-summary/\">Disciple.Tools Summit Summary</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:9:\"hillbilly\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:2789:\"\n<p>In October, we held the first ever Disciple.Tools Summit.  It was a great experimental gathering that we intend to repeat in the future.  We want to share what happened, what the community thought about it and invite you into the conversation.  Sign up to be notified about future events at <a href=\"https://disciple.tools/summit\">Disciple.Tools/summit</a>. </p>\n\n\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img decoding=\"async\" width=\"1024\" height=\"577\" src=\"https://disciple.tools/wp-content/uploads/DT-Summary-Horizontal-1024x577.png\" alt=\"\" class=\"wp-image-3978\" srcset=\"https://disciple.tools/wp-content/uploads/DT-Summary-Horizontal-1024x577.png 1024w, https://disciple.tools/wp-content/uploads/DT-Summary-Horizontal-300x169.png 300w, https://disciple.tools/wp-content/uploads/DT-Summary-Horizontal-768x433.png 768w, https://disciple.tools/wp-content/uploads/DT-Summary-Horizontal-1536x865.png 1536w, https://disciple.tools/wp-content/uploads/DT-Summary-Horizontal.png 1640w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></figure></div>\n\n\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\n\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img decoding=\"async\" loading=\"lazy\" width=\"724\" height=\"1024\" src=\"https://disciple.tools/wp-content/uploads/Disciple.Tools-Summit-Feedback-Summary-724x1024.png\" alt=\"\" class=\"wp-image-3979\" srcset=\"https://disciple.tools/wp-content/uploads/Disciple.Tools-Summit-Feedback-Summary-724x1024.png 724w, https://disciple.tools/wp-content/uploads/Disciple.Tools-Summit-Feedback-Summary-212x300.png 212w, https://disciple.tools/wp-content/uploads/Disciple.Tools-Summit-Feedback-Summary-768x1086.png 768w, https://disciple.tools/wp-content/uploads/Disciple.Tools-Summit-Feedback-Summary-1086x1536.png 1086w, https://disciple.tools/wp-content/uploads/Disciple.Tools-Summit-Feedback-Summary.png 1414w\" sizes=\"(max-width: 724px) 100vw, 724px\" /></figure></div>\n\n\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\n\n\n<p>We&#8217;ve captured all the notes from the key breakout sessions and hope to make them public soon. We used a framework of discussing the current state of a given topic and what is good about it. We then continued into a discussion around what is wrong, missing or confusing. Conversations that led us to several &#8220;We must&#8221; statements for each topic, which will help lead the community forward.  <br><br>Starting in 2023, we plan to hold regular community calls to demo new features and use cases.  </p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/disciple-tools-summit-summary/\">Disciple.Tools Summit Summary</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:5;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:38:\"New Ministry Partner Hosting Solutions\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:63:\"https://disciple.tools/news/ministry-partner-hosting-solutions/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Mon, 05 Dec 2022 15:29:47 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=4111\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:737:\"<p>A trusted partner of Disciple.Tools has decided to offer managed hosting.  We have worked with this team for a number of years and are excited that this business-as-mission initiative can help serve the Kingdom.  Their team is located in a sensitive part of North Africa and is currently using some of the same M2M and<a class=\"excerpt-read-more\" href=\"https://disciple.tools/news/ministry-partner-hosting-solutions/\" title=\"ReadNew Ministry Partner Hosting Solutions\">... Read more &#187;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/ministry-partner-hosting-solutions/\">New Ministry Partner Hosting Solutions</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:9:\"hillbilly\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:2010:\"\n<p>A trusted partner of Disciple.Tools has decided to offer managed hosting.  We have worked with this team for a number of years and are excited that this business-as-mission initiative can help serve the Kingdom.  Their team is located in a sensitive part of North Africa and is currently using some of the same M2M and DMM methodologies as many of you.</p>\n\n\n\n<h3>Services &amp; Features</h3>\n\n\n\n<ul>\n<li>Data housed in US Servers (Digital Ocean)\n<ul>\n<li>GDRP (General Data Protection Regulation) Compliant</li>\n</ul>\n</li>\n\n\n\n<li>Email distribution (Amazon -AES)</li>\n\n\n\n<li>General Domain with custom subdomain (custom domain available upon request)\n<ul>\n<li>www.dthost.app/yoursubdomain</li>\n</ul>\n</li>\n\n\n\n<li>Single or Network (up to 20 sub-sites) or Enterprise (20+ sub-sites)</li>\n\n\n\n<li>SSL Security Certificate – Encryption in transmission&nbsp;</li>\n\n\n\n<li>2-step authenticator security feature</li>\n\n\n\n<li>Training/Assistance with site customization (Not execution of customization)</li>\n\n\n\n<li>Tech support</li>\n</ul>\n\n\n\n<h3>Pricing</h3>\n\n\n\n<p><strong>Single Site &#8211; $60 Monthly</strong></p>\n\n\n\n<p>One site for your ministry/team – no connected sites (no transfer of contacts)</p>\n\n\n\n<p><strong>Network Site &#8211; $100 Monthly</strong></p>\n\n\n\n<p>Multiple connected sites (up to 20) – allows for transfering of contacts and administrator oversight for all connected sites</p>\n\n\n\n<p><strong>Enterprise Site &#8211; (Prices Vary)</strong></p>\n\n\n\n<p>21-50 subsites &#8211; $150 monthly</p>\n\n\n\n<p>50-75 subsites &#8211; $200 monthly</p>\n\n\n\n<p>100+ subsites &#8211; TBD</p>\n\n\n\n<h3>Next Steps</h3>\n\n\n\n<p>Click Here to fill out the form to officially request hosting service: <a href=\"http://s1.ag.org/dt-interest\">http://s1.ag.org/dt-interest</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/ministry-partner-hosting-solutions/\">New Ministry Partner Hosting Solutions</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:6;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:42:\"Disciple.Tools Webform v5.7 – Shortcodes\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:67:\"https://disciple.tools/news/disciple-tools-webform-v5-7-shortcodes/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Mon, 05 Dec 2022 11:19:41 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=4108\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:246:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/disciple-tools-webform-v5-7-shortcodes/\">Disciple.Tools Webform v5.7 &#8211; Shortcodes</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:1173:\"<h1>Avoid duplicates on form submittion</h1>\n<p>We've added a new option to reduce the number of duplicate contacts in your D.T instance.</p>\n<p>Normally, when a contact submits their email and/or phone number a new contact record is created in Disciple.Tools.\nNow when the form is submitted we have the option to check if that email or phone number already exists in the system.\nIf no matches are found, it creates the contact record as usual. \nIf it finds the email or phone number, then it updates the existing contact record instead and adds the submitted info.</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/205624530-08306462-17c7-423d-bd2d-5e81595bab15.png\" alt=\"image\" /></p>\n<p>The form submittion will @mention the assigned to all record the form contents:</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/205624304-097224a6-edb0-4c3b-ba26-773be66c8b9a.png\" alt=\"image\" /></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/disciple-tools-webform-v5-7-shortcodes/\">Disciple.Tools Webform v5.7 &#8211; Shortcodes</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:7;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:21:\"Theme Release v1.33.0\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:50:\"https://disciple.tools/news/theme-release-v1-33-0/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Mon, 28 Nov 2022 09:45:23 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=4021\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:204:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-33-0/\">Theme Release v1.33.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:3838:\"<h2>New</h2>\n<ul>\n<li>Switching from poeditor.com for translations to <a href=\"https://translate.disciple.tools/\">https://translate.disciple.tools/</a></li>\n<li>Ability to hide a tile based on custom conditions</li>\n<li>Use locations in workflows</li>\n<li>Remove items in workflows</li>\n</ul>\n<h2>Dev:</h2>\n<p>API: Ability to check if a contact email or phone already exists before creating a contact.</p>\n<h2>Fixes</h2>\n<ul>\n<li>Fix deleting a report in the WP Admin</li>\n<li>Fix nothing happening when updating a comment</li>\n<li>Load metrics faster when there are a lot of groups</li>\n<li>set D.T to not cache pages to avoid showing outdated data in some cases.</li>\n</ul>\n<h2>Details</h2>\n<h3>Translations with <a href=\"https://translate.disciple.tools\">https://translate.disciple.tools</a></h3>\n<p>We moved translation of Disciple.Tools from poeditor to a new system called weblate found here: <a href=\"https://translate.disciple.tools\">https://translate.disciple.tools</a></p>\n<p>Would you like to help us test it out on the theme? \nYou can create an account here: <a href=\"https://translate.disciple.tools\">https://translate.disciple.tools</a>\nAnd then find the theme here: <a href=\"https://translate.disciple.tools/projects/disciple-tools/disciple-tools-theme/\">https://translate.disciple.tools/projects/disciple-tools/disciple-tools-theme/</a>\nFor documentation have a look at: <a href=\"https://disciple.tools/user-docs/translations/\">https://disciple.tools/user-docs/translations/</a></p>\n<p>Why Weblate?\nWeblate offers us a few advantages that we couldn't take advantage of with Poeditor.</p>\n<ul>\n<li>Reusing translations or copying translations from similar strings.</li>\n<li>Better wordpress compatibility checks.</li>\n<li>Ability to support many plugins. We are excited about this capacity to bring many D.T plugin to other languages as well. </li>\n</ul>\n<h3>Ability to hide a tile based on custom conditions</h3>\n<p>After customizing your Disciple.Tools instance with more fields and tiles, it can become useful to only sometimes  display a tile with a group of fields. \nExample: Lets only show the Follow Up tile when the contact is active.</p>\n<p>We can find this setting at WP Admin &gt; Settings (D.T) &gt; Tiles tab. Select the Follow Up tile. </p>\n<p>Here, under Tile Display, we can select Custom. Then we add the Contact Status &gt; Active display condition and save.</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/204240706-c3d6d4a2-8d4a-4b43-852c-f87ee7f44a22.png\" alt=\"image\" /></p>\n<h3>Use locations in workflows</h3>\n<p>When using workflows to automatically update records, we can now add and remove locations.\nExample: if a contact is in location \"France\", when can auto assign the contact to Dispatcher A.</p>\n<h3>Remove items in workflows</h3>\n<p>We can now use workflows to remove more items. Contact is archived? Remove the custom \"follow-up\" tag.</p>\n<h3>API: Check if a contact email or phone already exists before creating a contact.</h3>\n<p>Currently used by the webform plugin.\nNormally filling out the webform creates a new contact. With the <code>check_for_duplicates</code> flag, the API will search for the matching contact and update it instead of creating a new contact. If no matching contact is found, then a new one is still created.</p>\n<p>See <a href=\"https://developers.disciple.tools/theme-core/api-posts/create-post\">docs</a> for the API flag.</p>\n<p>See all changes since 1.32.0 here: <a href=\"https://github.com/DiscipleTools/disciple-tools-theme/compare/1.32.0...1.33.0\">https://github.com/DiscipleTools/disciple-tools-theme/compare/1.32.0...1.33.0</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-33-0/\">Theme Release v1.33.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:8;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:21:\"Theme Release v1.32.0\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:50:\"https://disciple.tools/news/theme-release-v1-32-0/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Mon, 10 Oct 2022 13:27:04 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=3845\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:204:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-32-0/\">Theme Release v1.32.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:1867:\"<h2>New</h2>\n<ul>\n<li>New Link field type</li>\n<li>People Groups in Core</li>\n<li>D.T Usage </li>\n</ul>\n<h2>Dev</h2>\n<ul>\n<li>Filter for registered D.T plugins</li>\n<li>Ability to update a duplicate record instead for creating a new one</li>\n</ul>\n<h2>Details</h2>\n<h3>New Link field type</h3>\n<p>One field to hold many values. Like the phone number or email address fields, but customizable to your needs.</p>\n<p><img src=\"https://user-images.githubusercontent.com/24901539/194859203-1a4eccf0-f095-4fda-bbc2-b058f3612b36.gif\" alt=\"Peek 2022-10-10 12-46\" /></p>\n<h3>People Groups</h3>\n<p>Enable the People groups tab in WP Admin &gt; Settings &gt; General to display the people groups UI.\nThis replaces the people groups plugin.\n<img src=\"https://user-images.githubusercontent.com/24901539/194860522-e5fd5344-5918-4180-8b32-8d94cdc24181.png\" alt=\"image\" /></p>\n<h3>D.T Usage</h3>\n<p>We've updated how we collect telemetry on Disciple.Tools to include countries and languages used.\nFor more information, and for the ability to opt out. See WP Admin &gt; Utilities (D.T) &gt; Security</p>\n<h3>Filter for registered D.T plugins</h3>\n<p>Ping the <code>dt-core/v1/settings</code> endpoint to get a list of registered D.T plugins. <a href=\"https://developers.disciple.tools/theme-core/api-other/settings\">Docs</a>.</p>\n<h3>Ability to update a duplicate record instead for creating a new one</h3>\n<p>When creating a post, used the <code>check_for_duplicates</code> url parameter to search for duplicates before creating a new post.</p>\n<p>See <a href=\"https://github.com/DiscipleTools/Documentation/blob/master/theme-core/api-posts/create-post.md\">documentation</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/theme-release-v1-32-0/\">Theme Release v1.32.0</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}i:9;a:6:{s:4:\"data\";s:54:\"\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\n\t\t\n\t\t\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";s:5:\"child\";a:3:{s:0:\"\";a:5:{s:5:\"title\";a:1:{i:0;a:5:{s:4:\"data\";s:18:\"Facebook Plugin v1\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:47:\"https://disciple.tools/news/facebook-plugin-v1/\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:7:\"pubDate\";a:1:{i:0;a:5:{s:4:\"data\";s:31:\"Wed, 21 Sep 2022 12:59:30 +0000\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:4:\"guid\";a:1:{i:0;a:5:{s:4:\"data\";s:45:\"https://disciple.tools/?post_type=news&p=3841\";s:7:\"attribs\";a:1:{s:0:\"\";a:1:{s:11:\"isPermaLink\";s:5:\"false\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:11:\"description\";a:1:{i:0;a:5:{s:4:\"data\";s:198:\"<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/facebook-plugin-v1/\">Facebook Plugin v1</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:32:\"http://purl.org/dc/elements/1.1/\";a:1:{s:7:\"creator\";a:1:{i:0;a:5:{s:4:\"data\";s:6:\"dtools\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:40:\"http://purl.org/rss/1.0/modules/content/\";a:1:{s:7:\"encoded\";a:1:{i:0;a:5:{s:4:\"data\";s:354:\"<ul>\n<li>More Robust Facebook Sync using crons</li>\n<li>Sync works on more setups</li>\n<li>Faster contact creation</li>\n<li>Using less resources</li>\n</ul>\n<p>The post <a rel=\"nofollow\" href=\"https://disciple.tools/news/facebook-plugin-v1/\">Facebook Plugin v1</a> appeared first on <a rel=\"nofollow\" href=\"https://disciple.tools\">Disciple.Tools</a>.</p>\n\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}}}s:27:\"http://www.w3.org/2005/Atom\";a:1:{s:4:\"link\";a:1:{i:0;a:5:{s:4:\"data\";s:0:\"\";s:7:\"attribs\";a:1:{s:0:\"\";a:3:{s:4:\"href\";s:33:\"https://disciple.tools/news/feed/\";s:3:\"rel\";s:4:\"self\";s:4:\"type\";s:19:\"application/rss+xml\";}}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}s:44:\"http://purl.org/rss/1.0/modules/syndication/\";a:2:{s:12:\"updatePeriod\";a:1:{i:0;a:5:{s:4:\"data\";s:9:\"\n\thourly\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}s:15:\"updateFrequency\";a:1:{i:0;a:5:{s:4:\"data\";s:4:\"\n\t1\t\";s:7:\"attribs\";a:0:{}s:8:\"xml_base\";s:0:\"\";s:17:\"xml_base_explicit\";b:0;s:8:\"xml_lang\";s:0:\"\";}}}}}}}}}}}}s:4:\"type\";i:128;s:7:\"headers\";O:42:\"Requests_Utility_CaseInsensitiveDictionary\":1:{s:7:\"\u0000*\u0000data\";a:12:{s:4:\"date\";s:29:\"Sat, 18 Feb 2023 15:13:21 GMT\";s:12:\"content-type\";s:34:\"application/rss+xml; charset=UTF-8\";s:4:\"link\";s:108:\"<https://disciple.tools/wp-json/>; rel=\"https://api.w.org/\", <https://disciple.tools/news/>; rel=\"canonical\"\";s:13:\"last-modified\";s:29:\"Thu, 16 Feb 2023 18:25:02 GMT\";s:4:\"etag\";s:34:\"\"cb3bbe37d332a937e8293b7bf15ea063\"\";s:13:\"x-proxy-cache\";s:3:\"HIT\";s:15:\"cf-cache-status\";s:7:\"DYNAMIC\";s:9:\"report-to\";s:249:\"{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F6Atj827O3hL4jaQsMjgUuBk%2Bf%2F6oO342Soq7357oa0M6fCF9ga2Ru7cItsI1iB3OZUAxT%2FGHYyW4nNu%2FfSJt3iIOBaOEYGEwRCgSGwoA5A1UM8SGr7NHJw2hTEtWAlvqA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}\";s:3:\"nel\";s:60:\"{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}\";s:6:\"server\";s:10:\"cloudflare\";s:6:\"cf-ray\";s:20:\"79b7b4ce09b61316-IAD\";s:7:\"alt-svc\";s:43:\"h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400\";}}s:5:\"build\";s:14:\"20220710001805\";}",
        "autoload": "no"
    },
    {
        "option_id": "7814",
        "option_name": "_transient_timeout_feed_mod_95c412530dcb03202b547e1980ca342f",
        "option_value": "1676776401",
        "autoload": "no"
    },
    {
        "option_id": "7815",
        "option_name": "_transient_feed_mod_95c412530dcb03202b547e1980ca342f",
        "option_value": "1676733201",
        "autoload": "no"
    },
    {
        "option_id": "8013",
        "option_name": "_transient_timeout_action_scheduler_last_pastdue_actions_check",
        "option_value": "1676776534",
        "autoload": "no"
    },
    {
        "option_id": "8014",
        "option_name": "_transient_action_scheduler_last_pastdue_actions_check",
        "option_value": "1676754934",
        "autoload": "no"
    }
  ]);
};

const simulateQuery1 = (schema, request) => {
  return OK([
    {
        "histid": "36542",
        "user_caps": "administrator",
        "action": "viewed",
        "object_type": "contacts",
        "object_subtype": "",
        "object_name": "ZZHello World 0.3799307881741609",
        "object_id": "127",
        "user_id": "1",
        "hist_ip": "0",
        "hist_time": "1676527052",
        "object_note": "",
        "meta_id": "0",
        "meta_key": "0",
        "meta_value": "0",
        "meta_parent": "0",
        "old_value": "",
        "field_type": ""
    },
    {
        "histid": "36540",
        "user_caps": "administrator",
        "action": "field_update",
        "object_type": "contacts",
        "object_subtype": "multi_select_test",
        "object_name": "ZZHello World 0.3799307881741609",
        "object_id": "127",
        "user_id": "1",
        "hist_ip": "0",
        "hist_time": "1676527044",
        "object_note": "Added Random Options: option 2",
        "meta_id": "1923",
        "meta_key": "multi_select_test",
        "meta_value": "two",
        "meta_parent": "0",
        "old_value": "",
        "field_type": "multi_select"
    },
  ]);
};

const getIntervals = (schema, request) => {
  const data = {
    "hourly": {
        "interval": 3600,
        "display": "Once Hourly"
    },
    "twicedaily": {
        "interval": 43200,
        "display": "Twice Daily"
    },
    "daily": {
        "interval": 86400,
        "display": "Once Daily"
    }
  };
  return OK(data);
};

const getConnections = (schema, request) => {
  const data = [
    {
      "id": 1,
      "name": "MTM GMM",
      "type": "HTTP/S",
      "data": JSON.stringify({
        "url": "http://localhost:3000/wp-json/wpquerypush/v1/query",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer 123xyz",
        }
      })
    },
    {
      "id": 2,
      "name": "Make.com",
      "type": "HTTP/S",
      "data": JSON.stringify({
        "url": "https://make.com/webhook/123abc",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer 456xyz",
        }
      })
    },
  ];
  const mappedData = data.map((item) => ({ id: item.id, name: item.name }));
  //return OK([]);
  return OK(mappedData);
};

const getTables = (schema, request) => {
  const data = [
    {
        "table_name": "table 1",
    },
    {
        "table_name": "wp_options",
    }
  ];
  return OK(data);
};

const getLogsEmpty = (schema, request) => {
    return OK([]);
};

const getLogs = (schema, request) => {
  const data = [
    {
      "ts": "2021-07-28T15:30:00.000Z",
      "user": "user-13",
      "type": "scheduled",
      "connection": "MTM GMM",
      "query": "SELECT * FROM wp_options",
      "status": "200",
      "response": "{}",
      "request": "[{\"table_name\":\"wp_options\"}]"
    },
    {
      "ts": "2022-07-28T15:30:00.000Z",
      "user": "user-42",
      "type": "manual",
      "query": "SELECT * FROM dt_activity_log LIMIT 10",
      "connection_name": "Make.com",
      "status": "404",
      "response": "{\"error\": \"Unauthorized\"}",
      "request": ""
    },
  ];
  return OK(data);
};

const createConnection = (schema, request) => {
  return OK({ id: 2 });
};

const createSchedule = (schema, request) => {
  return OK({});
};

const send = (schema, request) => {
  return SERVER_ERROR("Server Error");
  //return OK({});
};

export const v1 = (server) => {
  server.namespace = "/wp-json/wpquerypush";
  server.timing = 2000;
  //this.options("*", (schema, request) => handleOptions(schema, request));
  server.get("/v1/connections", (schema, request) => getConnections(schema, request));
  server.get("/v1/intervals", (schema, request) => getIntervals(schema, request));
  server.get("/v1/tables", (schema, request) => getTables(schema, request));
  server.get("/v1/logs", (schema, request) => getLogs(schema, request));
  server.get("/v1", (schema, request) => healthCheck(schema, request));
  server.get("*", () => NOT_FOUND());
  server.post("/v1/connections", (schema, request) => createConnection(schema, request));
  server.post("/v1/schedules", (schema, request) => createSchedule(schema, request));
  server.post("/v1/send", (schema, request) => send(schema, request));
  server.post("/v1/query", (schema, request) => simulateQuery1(schema, request));
  server.post("/v1/query-1", (schema, request) => simulateQuery1(schema, request));
  server.post("/v1/query-2", (schema, request) => simulateQuery2(schema, request));
  server.post("/v1/query-3", (schema, request) => simulateQuery3(schema, request));
  server.post("/v1/query-4", (schema, request) => simulateQuery4(schema, request));
  server.put("*", () => NOT_FOUND());
  server.delete("*", () => NOT_FOUND());
};
