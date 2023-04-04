var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var DefaultRoute = Router.DefaultRoute;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var browserHistory = ReactRouter.browserHistory;

var routes = (
    <Router history={browserHistory} >
        <Route path="/" component={require("./components/app.js")} >
            {/* Embr 2.0 */}
            <IndexRoute component={require("./components/hub/hub.js")} />
            <Route path="/pdf" component={require("./components/pdf/builder.js")} />

            <Route path="/welcome" component={require("./components/marketing-enroll/marketingEnroll.js")} />

            {/* MyMarketing Materials */}
            <Route path="/my-marketing" authorize={['admin', 'manager', 'user', 'recruit', 'visitor']} component={require("./components/myMarketing/myMarketing.js")}>
                <Route path="flyers" component={require("./components/myMarketing/flyers/flyerPage.js")} />
                <Route path="business-cards" component={require("./components/myMarketing/business-cards/businessCardPage.js")} />
                <Route path="emails" component={require("./components/myMarketing/emails/emailsPage.js")} />
                <Route path="postcards" component={require("./components/myMarketing/postcards/postcardPage.js")} />
                <Route path="socialads" component={require("./components/myMarketing/social-ads/socialAdsPage.js")} />
                <Route path="marketing-ideas" component={require("./components/myMarketing/marketing-ideas/marketingIdeasPage.js")} />
                <Route path="graphics" component={require('./components/myMarketing/graphics/graphicsPage.js')} />
            </Route>

            <Route path="/my-marketing" authorize={['admin', 'manager', 'user', 'partners', 'recruit', 'visitor']} component={require("./components/myMarketing/myMarketing.js")}>
                <Route path="my-photos" component={require("./components/myMarketing/photos/photos.js")} />
                <Route path="logos" component={require("./components/myMarketing/logos/logosPage.js")} />
                <Route path="my-services" component={require("./components/myMarketing/services/services.js")} />
                <Route path="my-logos" component={require("./components/myMarketing/partner-logo/logo.js")} />

            </Route>

            {/* Cobranded materials routes */}
            <Route path="/my-marketing" authorize={['admin', 'manager', 'user', 'partners', 'recruit', 'visitor']} component={require("./components/myMarketing/myMarketing.js")}>
                <Route path="cobranded-emails" component={require("./components/myMarketing/cobranded-emails/cobrandedEmailsPage.js")} />
                <Route path="cobranded-postcards" component={require("./components/myMarketing/cobranded-postcards/cobrandedPostcardPage.js")} />
                <Route path="cobranded-flyers" component={require("./components/myMarketing/cobranded-flyers/cobrandedFlyerPage.js")} />
                <Route path="cobranded-graphics" component={require('./components/myMarketing/cobranded-graphics/cobrandedGraphicsPage.js')} />
                <Route path="open-house-flyers" component={require("./components/myMarketing/open-house-flyers/ohflyerPage.js")} />
            </Route>

            {/* Realtor  materials routes */}
            <Route path="/my-marketing" authorize={['admin', 'manager', 'partners']} component={require("./components/myMarketing/myMarketing.js")}>
                <Route path="realtor-flyers" component={require("./components/myMarketing/realtor-flyers/realtorFlyerPage.js")} />
                <Route path="realtor-emails" component={require("./components/myMarketing/realtor-emails/realtorEmailPage.js")} />
                <Route path="realtor-postcards" component={require("./components/myMarketing/realtor-postcards/realtorPostcardPage.js")} />
                <Route path="realtor-business-cards" component={require("./components/myMarketing/realtor-business-cards/realtorBusinessCardPage.js")} />
                <Route path="realtor-socialads" component={require("./components/myMarketing/realtor-social-ads/socialAdsPage.js")} />
            </Route>

            {/* Spotlight pages */}
            <Route path="/my-marketing" authorize={['admin', 'manager', 'partners']} component={require("./components/spotlight/spotlight-middleware.js")}>
                <Route path="/spotlight-payment" component={require("./components/spotlight/spotlightPayment.js")} />
                <Route path="/spotlight-services" component={require("./components/spotlight/servicesPayment.js")} />
                <Route path="/spotlight-options" component={require("./components/spotlight/spotlightOptions.js")} />
                <Route path="/payment-confirmation" component={require("./components/spotlight/paymentConfirmation.js")} />
                <Route path="/services-addons" component={require("./components/spotlight/spotlightAddons.js")} />
                <Route path="/cart" component={require("./components/spotlight/spotlightCart.js")} />
                <Route path="/payment" component={require("./components/spotlight/payment.js")} />
            </Route>

            <Route path="/my-marketing" authorize={['admin', 'manager']} component={require("./components/spotlight/spotlight-middleware.js")}>
                <Route path="/spotlight-enrolled-services" component={require('./components/admin/spotlight/enrolledServices.js')} />
            </Route>
            {/* end Spotlight pages */}

            {/* Open House Flyers Generator */}
            <Route path="/open-house-flyer-generator" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/oh-flyers-generator/OHFlyerGenerator.js")} >
                <Route path=":id" component={require("./components/oh-flyers-generator/OHFlyerGenerator.js")} />
            </Route>
            {/* End Open House Flyers Generator */}

            {/* Marketing Graphics Generator */}
            <Route path="/graphics-generator" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/graphics-generator/graphicsGenerator.js")} >
                <Route path=":id" component={require("./components/graphics-generator/graphicsGenerator.js")} />
            </Route>
            {/* End Open House Flyers Generator */}

            <Route path="/salesforce" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/salesforce/salesforce.js")} >
                <Route path=":id" component={require("./components/salesforce/sendSalesforce.js")} />
            </Route>

            <Route path="/hub" authorize={['admin', 'manager', 'user', 'partners', 'recruit', 'visitor']} component={require("./components/hub/hubs.js")} >
                <IndexRoute component={require('./components/hub/hub.js')} />
                <Route path=":id" component={require("./components/hub/hub.js")} ></Route>
            </Route>

            <Route path="/partners" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/partners/partners.js")}>
                <Route path="create-partner" component={require("./components/partners/createPartner.js")} />
                <Route path="manage" >
                    <IndexRoute component={require("./components/partners/PartnersPage.js")} />
                    <Route path=":userid" component={require("./components/partners/editPartner.js")} />
                </Route>
            </Route>

            <Route path="/marketing-services" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/marketing-services/Services.js")}>
                <IndexRoute component={require('./components/marketing-services/marketingServices.js')} />
            </Route>

            <Route path="/marketing-survey" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/marketing-services/Services.js")}>
                <IndexRoute component={require('./components/marketing-survey/marketingSurvey.js')} />
            </Route>

            <Route path="/pages" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/pages/pages.js")}>
                <Route path=":url" component={require('./components/pages/page.js')} />
            </Route>

            <Route path="/portal" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/transition-portal/portal.js")}>
                <IndexRoute component={require('./components/transition-portal/portalPage.js')} />
                <Route path=":url" component={require('./components/transition-portal/portalPage.js')} />
            </Route>

            <Route path="/automations" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/automations/automations.js")}>
                <Route path=":page/:id" component={require("./components/automations/automationPage.js")} />
            </Route>

            <Route path="/social-media" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/social/social.js")}>
                <Route path="ads" component={require("./components/social/ads/socialAdsPage.js")} />
            </Route>

            <Route path="/admin/resources" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/admin/admin.js")}>
                <IndexRoute component={require('./components/admin/resources/resources.js')} />

                {/* Marketing Resources */}
                {/* <Route path="training" component={require("./components/admin/resources/training/training.js")} />
                <Route path="training/:id" component={require("./components/admin/resources/training/training.js")} /> */}

                <Route path="training">
                    <IndexRoute component={require("./components/admin/training-categories/categories.js")} />
                    <Route path="create" component={require("./components/admin/training-categories/create.js")} />
                    <Route path="manage">
                        <IndexRoute component={require("./components/admin/training-categories/manage.js")} />
                        <Route path=":id" component={require('./components/admin/training-categories/create.js')} />
                    </Route>
                    <Route path="create-resource" component={require("./components/admin/resources/training/training.js")} />
                    <Route path="create-resource/:id" component={require("./components/admin/resources/training/training.js")} />
                </Route>
            </Route>

            <Route path="/admin" authorize={['admin', "manager"]} component={require("./components/admin/admin.js")}>
                <Route name="requests" path="my-requests" component={require("./components/admin/requests/myRequests.js")} />
                <Route name="requests" path="my-requests/:requestId" component={require("./components/admin/requests/myRequests.js")} />
                <Route path="my-closed-requests" component={require("./components/admin/requests/myClosedRequests.js")} />
                <Route path="service-requests" component={require("./components/admin/requests/serviceRequests.js")} />
                <Route path="quick-create-request" component={require("./components/admin/requests/quickCreateRequests.js")} />
                <Route path="logos" component={require("./components/admin/logos/logos.js")} />
                <Route path="flyers" component={require("./components/admin/flyers/flyers.js")} />
                <Route path="open-house-flyers" component={require("./components/admin/open-house-flyers/flyers.js")} />
                <Route path="flyers/:flyerId" component={require("./components/admin/flyers/flyers.js")} />
                <Route path="business-cards" component={require("./components/admin/business-cards/businessCards.js")} />
                <Route path="business-cards/:businesscardId" component={require("./components/admin/business-cards/businessCards.js")} />
                <Route path="graphics" component={require("./components/admin/graphics/graphics.js")} />
                <Route path="graphics/:graphicsId" component={require("./components/admin/graphics/graphics.js")} />

                <Route path="automations" component={require("./components/admin/automations/automations.js")} />
                <Route path="automations/:automationId" component={require("./components/admin/automations/automations.js")} />

                <Route path="emails" component={require('./components/admin/emails/email.js')} />
                <Route path="emails/:emailId" component={require("./components/admin/emails/email.js")} />
                <Route path="postcards" component={require('./components/admin/postcard/postcard.js')} />
                <Route path="postcards/:postcardId" component={require("./components/admin/postcard/postcard.js")} />
                <Route path="socialads/:socialAdId" component={require("./components/admin/socialAd/socialAd.js")} />
                <Route path="socialads" component={require("./components/admin/socialAd/socialAd.js")} />
                <Route path="upload-services" component={require('./components/admin/services/serviceUploadPage.js')} />
                <Route path="upload-services/:serviceId" component={require('./components/admin/services/serviceUploadPage.js')} />
                <Route path="manage-services" component={require('./components/admin/services/serviceReporting.js')} />
                <Route path="settings" component={require('./components/admin/settings/settings.js')} />

                {/* upload spotlight services */}
                <Route path="spotlight" >
                    <IndexRoute component={require('./components/admin/spotlight/spotlight.js')} />

                    <Route path="manage" component={require('./components/admin/spotlight/manage.js')} ></Route>
                    <Route path="create" component={require('./components/admin/spotlight/servicesUploadPage.js')} />
                    <Route path="create/:id" component={require('./components/admin/spotlight/servicesUploadPage.js')} ></Route>
                    <Route path=":id/addons" component={require('./components/admin/spotlight/manageAddons.js')} ></Route>
                </Route>

                <Route path="embr-reports">
                    <IndexRoute component={require("./components/admin/embrReport/embrReport.js").default} />
                </Route>

                <Route path="legal" >
                    <IndexRoute component={require('./components/admin/legal/index')} />
                    <Route path="manage" component={require('./components/admin/legal/manage')} ></Route>
                    <Route path="create" component={require('./components/admin/legal/legal')} ></Route>
                    <Route path=":id" component={require('./components/admin/legal/legal')} ></Route>
                </Route>

                <Route path="branches">
                    <IndexRoute component={require('./components/admin/branches/branch.js')} />
                    <Route path="create" component={require('./components/admin/branches/create.js')} />
                    <Route path="manage" component={require('./components/admin/branches/manage.js')} />
                    <Route path=":branchId" component={require('./components/admin/branches/edit.js')} />
                </Route>

                <Route path="team">
                    <IndexRoute component={require('./components/admin/team/team.js')} />
                    <Route path="create" component={require('./components/admin/team/create.js')} />
                    <Route path="manage" component={require('./components/admin/team/manage.js')} />
                    <Route path=":teamId" component={require('./components/admin/team/edit.js')} />
                </Route>

                <Route path="reports">
                    <IndexRoute component={require('./components/admin/reports/report.js')} />
                </Route>

                <Route path="roles">
                    <IndexRoute component={require('./components/admin/roles/roles.js')} />
                    <Route path="create" component={require('./components/admin/roles/createRoles.js')} />
                    <Route path="manage" component={require('./components/admin/roles/manageRoles.js')} />
                    <Route path="manage/(:id)" component={require('./components/admin/roles/createRoles.js')} />
                    <Route path="permissions/create" component={require('./components/admin/roles/createPermissions.js')} />
                </Route>

                <Route path="companies">
                    <IndexRoute component={require('./components/admin/user-companies/companies.js')} />
                    <Route path="create" component={require('./components/admin/user-companies/createCompanies.js')} />
                    <Route path="manage" component={require('./components/admin/user-companies/manageCompanies.js')} />
                    <Route path="manage/(:id)" component={require('./components/admin/user-companies/createCompanies.js')} />
                </Route>

                <Route path="categories">
                    <IndexRoute component={require("./components/admin/categories/categories.js").default} />
                    <Route path="create" component={require('./components/admin/categories/create.js')} />
                    <Route path="manage">
                        <IndexRoute component={require('./components/admin/categories/manage.js')} />
                        <Route path=":id" component={require('./components/admin/categories/create.js')} />
                    </Route>
                    <Route path=":id" component={require('./components/admin/categories/manageCategory.js')} />
                </Route>

                {/* marketing services admin section */}
                <Route path="marketing-services">
                    <IndexRoute component={require("./components/admin/marketing-services/marketing-services").default} />
                    <Route path="survey">
                        <IndexRoute component={require("./components/admin/marketing-services/survey/survey.js").default} />
                        <Route path="create" component={require('./components/admin/marketing-services/survey/create.js')} />
                        <Route path="manage">
                            <IndexRoute component={require('./components/admin/marketing-services/survey/manage.js')} />
                            <Route path=":id" component={require('./components/admin/marketing-services/survey/create.js')} />
                        </Route>
                    </Route>
                    <Route path="category">
                        <IndexRoute component={require("./components/admin/marketing-services/category/categories.js").default} />
                        <Route path="create" component={require('./components/admin/marketing-services/category/create.js')} />
                        <Route path="manage">
                            <IndexRoute component={require('./components/admin/marketing-services/category/manage.js')} />
                            <Route path=":id" component={require('./components/admin/marketing-services/category/create.js')} />
                        </Route>
                    </Route>
                    <Route path="services">
                        <IndexRoute component={require("./components/admin/marketing-services/services/services.js").default} />
                        <Route path="create" component={require('./components/admin/marketing-services/services/create.js')} />
                        <Route path="manage">
                            <IndexRoute component={require('./components/admin/marketing-services/services/manage.js')} />
                            <Route path=":id" component={require('./components/admin/marketing-services/services/create.js')} />
                        </Route>
                    </Route>
                    <Route path="packages">
                        <IndexRoute component={require("./components/admin/marketing-services/packages/packages.js").default} />
                        <Route path="create" component={require('./components/admin/marketing-services/packages/create.js')} />
                        <Route path="manage">
                            <IndexRoute component={require('./components/admin/marketing-services/packages/manage.js')} />
                            <Route path=":id" component={require('./components/admin/marketing-services/packages/create.js')} />
                        </Route>
                    </Route>
                    <Route path="unenroll-users">
                        <IndexRoute component={require("./components/admin/marketing-services/unenroll-users/unenroll.js")} />
                        <Route path=":id" component={require("./components/admin/marketing-services/unenroll-users/unenroll.js")} />
                    </Route>
                    <Route path="reports">
                        <IndexRoute component={require("./components/admin/marketing-services/reports/reports.js").default} />
                    </Route>
                </Route>

                <Route path="salesforce">
                    {/* salesforce fields */}
                    <IndexRoute component={require("./components/admin/fields/fields.js").default} />
                    <Route path="create-fields" component={require('./components/admin/fields/create.js')} />
                    <Route path="manage">
                        <IndexRoute component={require('./components/admin/fields/manage.js')} />
                        <Route path=":id" component={require('./components/admin/fields/create.js')} />
                    </Route>
                </Route>

                <Route path="tag">
                    <Route path="create" component={require('./components/admin/categories/createTag.js')} />
                    <Route path=":id" component={require('./components/admin/categories/createTag.js')} />
                </Route>

                <Route path="users">
                    <IndexRoute component={require("./components/admin/users/users.js")} />
                    <Route path="create-user" component={require("./components/admin/users/create.js")} />
                    <Route path="manage" >
                        <IndexRoute component={require("./components/admin/users/manageUsers.js")} />
                        <Route path=":userid" component={require("./components/admin/users/editUser.js")} />
                    </Route>
                </Route>

                <Route path="my-lo-list">
                    <IndexRoute component={require("./components/admin/my-lo-list/manage.js")} />
                </Route>

                <Route path="rss">
                    <IndexRoute component={require("./components/admin/rss/rss.js").default} />
                    <Route path="create" component={require('./components/admin/rss/create-edit.js').default}></Route>
                    <Route path="edit/(:id)" component={require('./components/admin/rss/create-edit.js').default}></Route>
                    <Route path="manage" component={require('./components/admin/rss/manage.js').default}></Route>
                </Route>

                <Route path="pages">
                    <IndexRoute component={require("./components/admin/pages/pages.js").default} />
                    <Route path="create" component={require('./components/admin/pages/pagesCreator.js')} />
                    <Route path="manage">
                        <IndexRoute component={require('./components/admin/pages/manage.js')} />
                        <Route path=":id" component={require('./components/admin/pages/pagesCreator.js')} />
                    </Route>

                </Route>

                <Route path="transition-portal">
                    <IndexRoute component={require("./components/admin/transition-portal/portal.js").default} />
                    <Route path="create" component={require('./components/admin/transition-portal/portalCreator.js')} />
                    <Route path="manage">
                        <IndexRoute component={require('./components/admin/transition-portal/manage.js')} />
                        <Route path=":id" component={require('./components/admin/transition-portal/portalCreator.js')} />
                    </Route>

                </Route>

                <Route path="hub">
                    <IndexRoute component={require("./components/admin/hub/hub.js").default} />
                    <Route path="create" component={require('./components/admin/hub/hubCreator.js')} />
                    <Route path="manage">
                        <IndexRoute component={require('./components/admin/hub/manage.js')} />
                        <Route path=":id" component={require('./components/admin/hub/hubCreator.js')} />
                    </Route>

                </Route>

                <Route path="toDoList">
                    <IndexRoute component={require("./components/admin/toDoList/toDoList.js")} />
                    <Route path="create" component={require('./components/admin/toDoList/create.js')} />
                    <Route path="manage">
                        <IndexRoute component={require('./components/admin/toDoList/manage.js')} />
                        <Route path=":id" component={require('./components/admin/toDoList/create.js')} />
                    </Route>
                </Route>

                {/*end admin*/}
            </Route>

            <Route path="/reports" component={require("./components/reports/reports.js")}>
                <Route path="bi-reports" component={require("./components/reports/biReports.js")} />
                <Route path="embr-stats" component={require("./components/reports/embr/stats.js")} />
            </Route>

            <Route path="/resources" component={require("./components/resources/resources.js")}>
                <Route path="training" component={require("./components/resources/training/trainingPage.js")} />
            </Route>

            {/* Create a project for users */}
            <Route path="/requests" authorize={['admin', 'manager', 'user', 'recruit']} component={require("./components/requests/requests.js")}>
                <Route path="submit-request" component={require("./components/requests/submit-request/requestPage.js")} />
            </Route>

            {/* Create a project for realtors */}
            <Route path="/requests" authorize={['admin', 'manager', 'partners']} component={require("./components/requests/requests.js")}>
                <Route path="create-project" component={require("./components/requests/realtorRequests/requestPage.js")} />
            </Route>

            <Route path="questions" component={require('./components/requests/questions.js')} />
            <Route path="feedback" component={require('./components/requests/questions.js')} />

            <Route path="/projects" authorize={['admin', 'manager', 'user', 'partners', 'recruit']} component={require("./components/projects/projects.js")}>
                <Route path="my-projects">
                    <IndexRoute component={require("./components/projects/myProjects.js")} />
                    <Route path=":id" component={require("./components/projects/myProjects.js")} />
                </Route>

                <Route path="page/(:requestId)" component={require("./components/projects/projectPage.js")} />
            </Route>

            <Route path="/user/" component={require("./components/user/user.js")}>
                <Route path="profile" component={require("./components/user/profile.js")} />
            </Route>

            <Route path="/user/calendar" component={require("./components/calendar/userCalendar.js")} />

        </Route>
    </Router>
);

module.exports = routes;
