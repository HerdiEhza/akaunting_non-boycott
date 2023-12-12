import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // "resources/css/app.css",
                // "resources/js/app.js",
                //
                "resources/assets/sass/app.css",
                "resources/assets/js/views/auth/common.js",
                "resources/assets/js/views/auth/users.js",
                "resources/assets/js/views/banking/accounts.js",
                "resources/assets/js/views/banking/transactions.js",
                "resources/assets/js/views/banking/transfers.js",
                "resources/assets/js/views/banking/reconciliations.js",
                "resources/assets/js/views/common/contacts.js",
                "resources/assets/js/views/common/companies.js",
                "resources/assets/js/views/common/dashboards.js",
                "resources/assets/js/views/common/documents.js",
                "resources/assets/js/views/common/imports.js",
                "resources/assets/js/views/common/items.js",
                "resources/assets/js/views/common/reports.js",
                "resources/assets/js/install.js",
                "resources/assets/js/views/install/update.js",
                "resources/assets/js/wizard.js",
                "resources/assets/js/views/modules/apps.js",
                "resources/assets/js/views/portal/apps.js",
                "resources/assets/js/views/settings/categories.js",
                "resources/assets/js/views/settings/currencies.js",
                "resources/assets/js/views/settings/settings.js",
                "resources/assets/js/views/settings/taxes.js",
            ],
            refresh: true,
        }),
    ],
});
