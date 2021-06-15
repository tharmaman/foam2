/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

FOAM_FILES([
  { name: 'foam/nanos/client/ClientBuilder' },
  { name: 'foam/nanos/controller/AppStyles', flags: ['web'] },
  { name: "foam/nanos/logger/LogMessage" },
  { name: "foam/nanos/logger/LogMessageDAO" },
  { name: "foam/nanos/logger/AbstractLogger" },
  { name: "foam/nanos/logger/ProxyLogger" },
  { name: "foam/nanos/logger/LoggerJDAO" },
  { name: "foam/nanos/logger/LogLevelFilterLogger" },
  { name: "foam/nanos/logger/NotificationLogMessageDAO" },
  { name: "foam/nanos/logger/RepeatLogMessageDAO" },
  { name: "foam/nanos/logger/StdoutLoggerDAO" },
  { name: 'foam/nanos/fs/File' },
  { name: 'foam/nanos/fs/FileType' },
  { name: 'foam/nanos/fs/FileProperty' },
  { name: 'foam/nanos/fs/FileDAODecorator' },
  { name: 'foam/nanos/fs/FileArray' },
  { name: 'foam/nanos/fs/FileArrayDAODecorator' },
  { name: 'foam/nanos/fs/FileArrayInCapablePayloadsDecorator' },
  { name: 'foam/nanos/fs/fileDropZone/FileDropZone', flags: ['web'] },
  { name: 'foam/nanos/fs/fileDropZone/FilePreview', flags: ['web'] },
  { name: 'foam/nanos/fs/fileDropZone/FileCard', flags: ['web'] },
  { name: "foam/nanos/crunch/AgentCapabilityJunctionDAOSummaryView", flags: ['web'] },
  { name: "foam/nanos/crunch/AssociatedEntity" },
  { name: "foam/nanos/crunch/CapabilityGrantMode" },
  { name: "foam/nanos/crunch/Capability" },
  { name: "foam/nanos/auth/ServiceProvider" },
  { name: 'foam/nanos/auth/test/DummySp' },
  { name: 'foam/nanos/fs/TextSaveView', flags: ['web'] },
  { name: "foam/nanos/app/AppConfig" },
  { name: "foam/nanos/app/ContextLookupAppConfigService"},
  { name: "foam/nanos/app/AppConfigService" },
  { name: 'foam/nanos/app/SupportConfig' },
  { name: "foam/nanos/notification/email/SMTPConfig" },
  { name: "foam/nanos/app/ClientAppConfigService" },
  { name: "foam/nanos/controller/WindowHash" },
  { name: "foam/nanos/controller/Memento" },
  { name: "foam/nanos/controller/MementoMixin" },
  { name: "foam/nanos/controller/ApplicationController" },
  { name: "foam/nanos/app/Mode" },
  { name: 'foam/nanos/alarming/AddAlarmNameDAO' },
  { name: 'foam/nanos/alarming/Alarm' },
  { name: 'foam/nanos/alarming/AlarmAndMonitoring' },
  { name: 'foam/nanos/alarming/Alarming' },
  { name: 'foam/nanos/alarming/AlarmingUniqueNameDAO' },
  { name: 'foam/nanos/alarming/AlarmConfig' },
  { name: 'foam/nanos/alarming/AlarmReason' },
  { name: 'foam/nanos/alarming/AlarmHostnameRuleAction' },
  { name: 'foam/nanos/alarming/AlarmLoggingDAO' },
  { name: 'foam/nanos/alarming/AlarmNotificationDAO' },
  { name: 'foam/nanos/alarming/MonitoringReport' },
  { name: 'foam/nanos/alarming/MonitorType' },
  { name: 'foam/nanos/alarming/OMName' },
  { name: "foam/nanos/auth/DayOfWeek" },
  { name: "foam/nanos/auth/Hours" },
  { name: "foam/nanos/auth/Address" },
  { name: "foam/nanos/auth/AgentJunctionStatus" },
  { name: "foam/nanos/auth/DeletedAware" },
  { name: "foam/nanos/auth/DeletedAwareDAOTest" },
  { name: "foam/nanos/auth/PasswordPolicy" },
  { name: "foam/nanos/auth/Group" },
  { name: 'foam/nanos/auth/HumanNameTrait' },
  { name: 'foam/nanos/auth/InvalidPasswordException' },
  { name: "foam/nanos/auth/LifecycleState" },
  { name: "foam/nanos/auth/LifecycleAware" },
  { name: 'foam/nanos/notification/Notifiable' },
  { name: "foam/nanos/auth/CreatedAware" },
  { name: "foam/nanos/auth/User" },
  { name: "foam/nanos/auth/PermissionTableView" },
  { name: "foam/nanos/auth/LastModifiedAware" },
  { name: "foam/nanos/auth/LastModifiedByAware" },
  { name: "foam/nanos/auth/ServiceProviderAware" },
  { name: "foam/nanos/auth/ServiceProviderAwareDAO" },
  { name: "foam/nanos/auth/ServiceProviderAwarePredicate" },
  { name: "foam/nanos/auth/ServiceProviderAwareSink" },
  { name: "foam/nanos/auth/ServiceProviderAwareSupport" },
  { name: "foam/nanos/auth/test/ServiceProviderAwareTest" },
  { name: "foam/nanos/auth/test/UserAndGroupPermissionTest" },
  { name: "foam/nanos/auth/Language" },
  { name: 'foam/nanos/auth/LanguageChoiceView', flags: ['web'] },
  { name: "foam/nanos/auth/CreatedAwareDAO" },
  { name: "foam/nanos/auth/LastModifiedAwareDAO" },
  { name: "foam/nanos/auth/LifecycleAwareDAO" },
  { name: "foam/nanos/auth/Login" },
  { name: "foam/nanos/auth/Permission" },
  { name: "foam/nanos/auth/Country" },
  { name: "foam/nanos/auth/PropertyType" },
  { name: "foam/nanos/auth/Region" },
  { name: "foam/nanos/auth/TimeZone" },
  { name: 'foam/nanos/auth/ResendVerificationEmail', flags: ['web'] },
  { name: "foam/nanos/auth/Phone" },
  { name: "foam/nanos/auth/HtmlDoc" },
  { name: "foam/nanos/auth/SignOutView" },
  { name: 'foam/nanos/auth/email/EmailTokenService'},
  { name: "foam/nanos/auth/email/EmailDocInterface" },
  { name: "foam/nanos/auth/email/EmailDocService" },
  { name: "foam/nanos/auth/email/ClientEmailDocService" },
  { name: "foam/nanos/auth/email/EmailVerificationWebAgent" },
  { name: "foam/nanos/auth/resetPassword/SuccessView" },
  { name: "foam/nanos/auth/resetPassword/ResetPasswordTokenService" },
  { name: "foam/nanos/auth/token/TokenService" },
  { name: "foam/nanos/auth/token/ClientTokenService" },
  { name: "foam/nanos/auth/token/Token" },
  { name: "foam/nanos/auth/token/AbstractTokenService" },
  { name: "foam/nanos/auth/ChangePasswordView" },
  { name: "foam/nanos/auth/ResetPassword" },
  { name: "foam/nanos/auth/RetrievePassword" },
  { name: "foam/nanos/auth/UpdatePassword" },
  { name: "foam/nanos/auth/CreatedByAware" },
  { name: "foam/nanos/auth/CreatedByAwareDAO" },
  { name: "foam/nanos/auth/Subject" },
  { name: "foam/nanos/auth/PriorPassword" },
  { name: "foam/nanos/auth/ruler/AddPasswordHistoryAction" },
  { name: "foam/nanos/auth/ruler/PreventDuplicateEmailAction" },
  { name: "foam/nanos/auth/ruler/PreventDuplicateUsernameAction" },
  { name: "foam/nanos/auth/ruler/EnsurePropertyOnCreateRule" },
  { name: "foam/nanos/auth/test/PasswordPolicyTest" },
  { name: "foam/nanos/auth/LastModifiedByAwareDAO" },
  { name: "foam/nanos/auth/PermissionedPropertyDAO" },
  { name: "foam/nanos/auth/ProfilePictureView", flags: ['web'] },
  { name: "foam/nanos/auth/twofactor/OTPAuthService" },
  { name: "foam/nanos/auth/twofactor/AbstractOTPAuthService" },
  { name: "foam/nanos/auth/twofactor/AbstractTOTPAuthService" },
  { name: "foam/nanos/auth/twofactor/ClientOTPAuthService" },
  { name: "foam/nanos/auth/twofactor/TwoFactorSignInView" },
  { name: "foam/nanos/auth/twofactor/UserRefinements" },
  { name: "foam/nanos/auth/twofactor/ThemeRefinements" },
  { name: "foam/nanos/auth/UserAndGroupAuthService" },
  { name: "foam/nanos/auth/UserQueryService" },
  { name: "foam/nanos/auth/SimpleUserQueryService" },
  { name: "foam/nanos/auth/AssignableAware" },
  { name: "foam/nanos/theme/Theme" },
  { name: "foam/nanos/theme/ThemeGlyphs" },
  { name: "foam/nanos/theme/ThemeDomain" },
  { name: "foam/nanos/theme/ThemeDomainsDAO" },
  { name: "foam/nanos/theme/Themes" },
  { name: "foam/nanos/bench/Benchmark" },
  { name: "foam/nanos/boot/NSpec" },
  { name: "foam/nanos/boot/NSpecAware" },
  { name: "foam/nanos/boot/DAOConfigSummaryView", flags: ['web'] },
  { name: "foam/nanos/boot/DAONSpecMenu" },
  { name: "foam/nanos/session/LocalSetting" },
  { name: "foam/nanos/session/Session" },
  { name: "foam/nanos/session/SessionTimer" },
  { name: "foam/nanos/session/SessionService" },
  { name: "foam/nanos/menu/XRegistration" },
  { name: "foam/nanos/menu/AbstractMenu" },
  { name: "foam/nanos/menu/DAOMenu" },
  { name: "foam/nanos/menu/DAOMenu2" },
  { name: "foam/nanos/menu/DocumentMenu" },
  { name: "foam/nanos/menu/DocumentFileMenu" },
  { name: "foam/nanos/menu/LinkMenu" },
  { name: "foam/nanos/menu/ListMenu" },
  { name: "foam/nanos/menu/Menu" },
  { name: "foam/nanos/menu/MenuBar" },
  { name: "foam/nanos/menu/PopupMenu" },
  { name: "foam/nanos/menu/SubMenu" },
  { name: "foam/nanos/menu/SubMenuView" },
  { name: "foam/nanos/menu/TabsMenu" },
  { name: "foam/nanos/menu/VerticalMenu" },
  { name: "foam/nanos/menu/ViewMenu" },
  { name: "foam/nanos/menu/ScriptMenu" },
  { name: "foam/nanos/menu/TreeAltView", flags: ['web'] },
  { name: "foam/nanos/menu/TreeGraphAltView" },
  { name: 'foam/nanos/medusa/AccessMode' },
  { name: 'foam/nanos/medusa/ClientElectoralService' },
  { name: 'foam/nanos/medusa/Clusterable' },
  { name: 'foam/nanos/medusa/ClusterClientDAO' },
  { name: 'foam/nanos/medusa/ClusterCommand' },
  { name: 'foam/nanos/medusa/ClusterCommandHop' },
  { name: 'foam/nanos/medusa/ClusterConfig' },
  { name: 'foam/nanos/medusa/ClusterConfigMonitor' },
  { name: 'foam/nanos/medusa/ClusterConfigMonitorAgent' },
  { name: 'foam/nanos/medusa/ClusterConfigNARegionReplayDAO' },
  { name: 'foam/nanos/medusa/ClusterConfigReplayDAO' },
  { name: 'foam/nanos/medusa/ClusterConfigReplayingInfoDAO' },
  { name: 'foam/nanos/medusa/ClusterConfigStatusDAO' },
  { name: 'foam/nanos/medusa/ClusterConfigSupport' },
  { name: 'foam/nanos/medusa/ClusterConfigSupportDAO' },
  { name: 'foam/nanos/medusa/ClusterException' },
  { name: 'foam/nanos/medusa/ClusterServerDAO' },
  { name: 'foam/nanos/medusa/ClusterTopology' },
  { name: 'foam/nanos/medusa/ClusterTopologyView' },
  { name: 'foam/nanos/medusa/DaggerService' },
  { name: 'foam/nanos/medusa/DefaultDaggerService' },
  { name: 'foam/nanos/medusa/DaggerLink' },
  { name: 'foam/nanos/medusa/DaggerLinks' },
  { name: 'foam/nanos/medusa/ElectoralService' },
  { name: 'foam/nanos/medusa/ElectoralServiceState' },
  { name: 'foam/nanos/medusa/ElectoralServiceServer' },
  { name: 'foam/nanos/medusa/MedusaEntry' },
  { name: 'foam/nanos/medusa/MedusaException' },
  { name: 'foam/nanos/medusa/MedusaAdapterDAO' },
  { name: 'foam/nanos/medusa/MedusaBroadcastDAO' },
  { name: 'foam/nanos/medusa/MedusaBroadcastNARegionDAO' },
  { name: 'foam/nanos/medusa/MedusaBroadcast2NodesDAO' },
  { name: 'foam/nanos/medusa/MedusaConsensusDAO' },
  { name: 'foam/nanos/medusa/MedusaHashingDAO' },
  { name: 'foam/nanos/medusa/MedusaInternalDAO' },
  { name: 'foam/nanos/medusa/MedusaNodeJDAO' },
  { name: 'foam/nanos/medusa/MedusaRegistry' },
  { name: 'foam/nanos/medusa/MedusaRegistryService' },
  { name: 'foam/nanos/medusa/MedusaNOPRegistryService' },
  { name: 'foam/nanos/medusa/MedusaSigningDAO' },
  { name: 'foam/nanos/medusa/MedusaSetNodeDAO' },
  { name: 'foam/nanos/medusa/MedusaTestingDAO' },
  { name: 'foam/nanos/medusa/MedusaType' },
  { name: 'foam/nanos/medusa/MedusaUniqueDAO' },
  { name: 'foam/nanos/medusa/NodeCView' },
  { name: 'foam/nanos/medusa/PrimaryNotFoundException' },
  { name: 'foam/nanos/medusa/PromotedPurgeAgent' },
  { name: 'foam/nanos/medusa/PurgeSink' },
  { name: 'foam/nanos/medusa/RegionCView' },
  { name: 'foam/nanos/medusa/RegionStatus' },
  { name: 'foam/nanos/medusa/ReplayCmd' },
  { name: 'foam/nanos/medusa/ReplayCompleteCmd' },
  { name: 'foam/nanos/medusa/ReplayDetailsCmd' },
  { name: 'foam/nanos/medusa/ReplayMediatorDAO' },
  { name: 'foam/nanos/medusa/ReplayNodeDAO' },
  { name: 'foam/nanos/medusa/ReplayingDAO' },
  { name: 'foam/nanos/medusa/ReplayingInfo' },
  { name: 'foam/nanos/medusa/ReplayingInfoDAO' },
  { name: 'foam/nanos/medusa/ReplayingInfoCView' },
  { name: 'foam/nanos/medusa/ReplayingInfoDetailCView' },
  { name: 'foam/nanos/medusa/RetryClientSinkDAO' },
  { name: 'foam/nanos/medusa/Status' },
  { name: 'foam/nanos/medusa/ZoneCView' },
  { name: 'foam/nanos/medusa/benchmark/DaggerLinkBenchmark' },
  { name: 'foam/nanos/medusa/benchmark/DaggerVerifyBenchmark' },
  { name: 'foam/nanos/medusa/benchmark/MedusaBenchmark' },
  { name: 'foam/nanos/medusa/test/MedusaTestObject' },
  { name: 'foam/nanos/benchmark/UUIDBenchmark' },
  { name: "foam/nanos/u2/navigation/TopNavigation", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/FooterView", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/SideNavigation", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/SideNavigationItemView", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/NavigationView", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/BusinessLogoView", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/UserView", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/SubMenuBar", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/ApplicationLogoView", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/UserInfoNavigationView", flags: ['web'] },
  { name: "foam/nanos/u2/navigation/NotificationMenuItem", flags: ['web'] },
  { name: "foam/nanos/script/Language" },
  { name: "foam/nanos/script/ScriptStatus" },
  { name: "foam/nanos/script/Script" },
  { name: "foam/nanos/script/ScriptEvent" },
  { name: "foam/nanos/script/Relationships" },
  { name: "foam/nanos/script/TestRunnerConfig" },
  { name: "foam/nanos/script/TestRunnerScript" },
  { name: "foam/nanos/jetty/HttpServer" },
  { name: "foam/nanos/servlet/Servlet" },
  { name: "foam/nanos/servlet/ErrorPageMapping" },
  { name: "foam/nanos/servlet/FilterMapping" },
  { name: "foam/nanos/servlet/ServletMapping" },
  { name: "foam/nanos/servlet/VirtualHostRoutingServlet" },
  { name: "foam/nanos/test/Test" },
  { name: "foam/nanos/test/TestBorder" },
  { name: "foam/nanos/cron/Cron" },
  { name: "foam/nanos/cron/CronSchedule" },
  { name: "foam/nanos/cron/CronScheduler" },
  { name: "foam/nanos/cron/CronScheduleDAO" },
  { name: "foam/nanos/cron/IntervalSchedule" },
  { name: "foam/nanos/cron/NeverSchedule" },
  { name: "foam/nanos/cron/OrSchedule" },
  { name: "foam/nanos/cron/Schedule" },
  { name: "foam/nanos/cron/TimeHMS" },
  { name: "foam/nanos/cron/TimeOfDaySchedule" },
  { name: "foam/nanos/cron/test/IntervalScheduleTest" },
  { name: "foam/nanos/cron/test/TimeOfDayScheduleTest" },
  { name: "foam/nanos/export/ClientGoogleSheetsExportService" },
  { name: "foam/nanos/export/CSVTableExportDriver"},
  { name: "foam/nanos/export/ExportDriverRegistry"},
  { name: "foam/nanos/export/ExportDriver" },
  { name: "foam/nanos/export/GoogleSheetsBasedExportDriver" },
  { name: "foam/nanos/export/GoogleSheetsExport" },
  { name: "foam/nanos/export/GoogleSheetsExportDriver" },
  { name: "foam/nanos/export/GoogleSheetsOutputter" },
  { name: "foam/nanos/export/GoogleSheetsPropertyMetadata" },
  { name: "foam/nanos/export/GoogleSheetsServiceConfig" },
  { name: "foam/nanos/export/JSONDriver"},
  { name: "foam/nanos/export/JSONJDriver"},
  { name: "foam/nanos/export/XMLDriver"},
  { name: "foam/nanos/export/report/Template" },
  { name: "foam/nanos/export/PDFGoogleSheetsExportDriver" },
  { name: "foam/nanos/export/TableExportDriver"},
  { name: "foam/nanos/google/api/auth/GoogleApiAuthService" },
  { name: "foam/nanos/google/api/auth/GoogleApiCredentials" },
  { name: "foam/nanos/google/api/drive/GoogleDriveService" },
  { name: "foam/nanos/google/api/sheets/import/ClientGoogleSheetsDataImportService" },
  { name: "foam/nanos/google/api/sheets/import/GoogleSheetsImportConfig" },
  { name: "foam/nanos/google/api/sheets/import/GoogleSheetsDataImportService" },
  { name: "foam/nanos/google/api/sheets/import/GoogleSheetsDataImportServiceImpl" },
  { name: "foam/nanos/google/api/sheets/import/GoogleSheetsTransactionsDataImportServiceImpl" },
  { name: "foam/nanos/google/api/sheets/import/ImportDataMessage"},
  { name: "foam/nanos/google/api/sheets/import/views/modal/ColumnsToPropertiesMappingModal" },
  { name: "foam/nanos/google/api/sheets/import/views/modal/GoogleSheetImportModal" },
  { name: "foam/nanos/google/api/sheets/import/views/modal/ImportFromGoogleSheetsForm"},
  { name: "foam/nanos/auth/Relationships" },
  { name: "foam/nanos/NanoService" },
  { name: "foam/nanos/auth/twofactor/OTPKey" },
  { name: "foam/nanos/auth/AuthService" },
  { name: "foam/nanos/auth/ProxyAuthService" },
  { name: "foam/nanos/auth/CachedAuthServiceProxy" },
  { name: "foam/nanos/auth/ClientAuthService" },
  { name: "foam/nanos/auth/ClientLoginAuthService" },
  { name: "foam/nanos/auth/AgentAuthService" },
  { name: "foam/nanos/auth/AgentAuthClient" },
  { name: "foam/nanos/auth/ClientAgentAuthService" },
  { name: "foam/nanos/pm/PMTemperatureCellFormatter" },
  { name: "foam/nanos/pm/NullPM" },
  { name: "foam/nanos/pm/PM" },
  { name: "foam/nanos/pm/PMInfo" },
  { name: "foam/nanos/pm/PMTableView", flags:['web'] },
  { name: "foam/nanos/pm/PMLogger" },
  { name: "foam/nanos/pm/NullPMLogger" },
  { name: "foam/nanos/pm/TemperatureCView" },
  { name: "foam/nanos/pm/PMFactory" },
  { name: "foam/nanos/pool/ThreadPoolAgency" },
  { name: "foam/nanos/jetty/JettyThreadPoolConfig" },
  { name: "foam/nanos/auth/PMAuthService" },
  { name: 'foam/nanos/notification/email/EmailConfig' },
  { name: 'foam/nanos/notification/email/EmailMessage' },
  { name: 'foam/nanos/notification/email/EmailService' },
  { name: 'foam/nanos/notification/email/EmailTemplate' },
  { name: 'foam/nanos/notification/email/SMTPEmailService' },
  { name: 'foam/nanos/notification/email/Status' },
  { name: 'foam/nanos/notification/push/PushService' },
  { name: 'foam/nanos/notification/push/FirebasePushService' },
  { name: 'foam/nanos/notification/sms/SMSMessage' },
  { name: 'foam/nanos/notification/sms/SMSService' },
  { name: 'foam/nanos/notification/sms/SMSSetting' },
  { name: 'foam/nanos/notification/sms/SMSStatus' },
  { name: 'foam/nanos/notification/sms/TwilioConfig' },
  { name: 'foam/nanos/notification/sms/TwilioSMSService' },
  { name: 'foam/nanos/demo/DemoObject' },
  { name: 'foam/nanos/demo/Demo' },
  { name: 'foam/nanos/http/Format' },
  { name: 'foam/nanos/http/Command' },
  { name: 'foam/nanos/http/WebAgent' },
  { name: "foam/nanos/http/ProxyWebAgent" },
  { name: "foam/nanos/http/HttpParameters" },
  { name: 'foam/nanos/http/SendErrorHandler' },
  { name: "foam/nanos/http/DefaultHttpParameters" },
  { name: "foam/nanos/dao/Operation" },
  { name: "foam/nanos/doc/DocumentationView" },
  { name: 'foam/nanos/demo/relationship/CourseType' },
  { name: 'foam/nanos/demo/relationship/Course' },
  { name: 'foam/nanos/demo/relationship/Professor' },
  { name: 'foam/nanos/demo/relationship/Student' },
  { name: 'foam/nanos/demo/relationship/Controller' },
  { name: "foam/nanos/notification/ClientResendNotificationService"},
  { name: 'foam/nanos/notification/EmailSetting' },
  { name: 'foam/nanos/notification/Notification'},
  { name: 'foam/nanos/notification/MyNotificationDAO'},
  { name: "foam/nanos/notification/ResendNotificationServiceInterface"},
  { name: 'foam/nanos/notification/NotificationView'},
  { name: 'foam/nanos/notification/NotificationExpansionDAO'},
  { name: 'foam/nanos/notification/NotificationRowView'},
  { name: 'foam/nanos/notification/NotificationSetting' },
  { name: 'foam/nanos/notification/NotificationSettingsView'},
  { name: 'foam/nanos/notification/NotificationCitationView'},
  { name: 'foam/nanos/notification/NotificationNotificationView'},
  { name: 'foam/nanos/notification/NotificationHostnameRuleAction'},
  { name: 'foam/nanos/notification/ScriptRunNotification'},
  { name: 'foam/nanos/notification/ScriptRunNotificationNotificationCitationView'},
  { name: 'foam/nanos/notification/SlackSetting' },
  { name: 'foam/nanos/notification/ToastNotificationDAO' },
  { name: 'foam/nanos/notification/ToastState' },
  { name: 'foam/nanos/notification/NotificationMessageModal'},
  { name: 'foam/nanos/dashboard/Demo' },

  // Ticket
  { name: 'foam/nanos/ticket/TicketStatus' },
  { name: 'foam/nanos/ticket/TicketComment' },
  { name: 'foam/nanos/ticket/Ticket' },
  { name: 'foam/nanos/ticket/Relationships' },
  { name: 'foam/nanos/ticket/TicketAddCommentDAO' },
  { name: 'foam/nanos/ticket/TicketOwnerDAO' },
  { name: 'foam/nanos/ticket/TicketCommentOwnerDAO' },
  { name: 'foam/nanos/ticket/TicketDAOCreateView' },
  { name: 'foam/nanos/ticket/TicketSummaryView' },
  { name: 'foam/nanos/ticket/SummaryCard' },

  // Dig
  { name: "foam/nanos/dig/exception/DigErrorMessage" },
  { name: 'foam/nanos/dig/Argument'},
  { name: 'foam/nanos/dig/ResultView' },
  { name: 'foam/nanos/dig/DIG' },
  { name: 'foam/nanos/dig/DUGRule' },
  { name: 'foam/nanos/dig/DUGRuleAction' },
  { name: 'foam/nanos/dig/DigFileUploadView' },
  { name: 'foam/nanos/dig/DigSnippetView' },
  { name: 'foam/nanos/dig/LinkView' },
  { name: 'foam/nanos/dig/SUGAR' },

  { name: 'foam/nanos/notification/email/ClientPOP3EmailService'},
  { name: 'foam/nanos/notification/email/POP3Email'},

  // foam/nanos/ruler
  { name: "foam/nanos/ruler/RuleGroup" },
  { name: "foam/nanos/ruler/FindRuledCommand" },
  { name: "foam/nanos/ruler/Ruled" },
  { name: "foam/nanos/ruler/Rule" },
  { name: "foam/nanos/ruler/RuleAction" },
  { name: "foam/nanos/ruler/CompositeRuleAction" },
  { name: "foam/nanos/ruler/StopRulerAction" },
  { name: "foam/nanos/ruler/RuleHistory" },
  { name: "foam/nanos/ruler/RuleHistoryStatus" },
  { name: "foam/nanos/ruler/RuledDAO" },
  { name: "foam/nanos/ruler/test/RuledDAOTest" },
  { name: "foam/nanos/ruler/test/RuledDummy" },
  { name: "foam/nanos/ruler/RulerDAO" },
  { name: "foam/nanos/ruler/ScriptPredicate"},
  { name: "foam/nanos/ruler/UpdateRulesListSink" },
  { name: "foam/nanos/ruler/TestedRule" },
  { name: "foam/nanos/ruler/RulerProbe" },
  { name: "foam/nanos/ruler/predicate/PropertyChangePredicate" },
  { name: "foam/nanos/ruler/predicate/PropertyEQProperty" },
  { name: "foam/nanos/ruler/Relationships" },
  { name: "foam/nanos/ruler/action/SendNotification" },
  { name: "foam/nanos/ruler/predicate/PropertyHasValue" },
  { name: "foam/nanos/ruler/predicate/PropertyEQValue" },
  { name: "foam/nanos/ruler/predicate/PropertyNEQValue" },
  { name: "foam/nanos/ruler/predicate/NewEqOld" },
  { name: "foam/nanos/ruler/predicate/IsClassPredicate" },
  { name: "foam/nanos/ruler/predicate/IsInstancePredicate" },
  { name: "foam/nanos/ruler/predicate/PropertyIsInstance" },
  { name: "foam/nanos/ruler/predicate/PropertyIsClass" },
  { name: "foam/nanos/ruler/predicate/ContextContainsPredicate" },
  { name: "foam/nanos/ruler/predicate/PropertyIsSetPredicate" },
  { name: "foam/nanos/ruler/action/AbstractCheckDAOforMatching" },
  { name: "foam/nanos/ruler/action/ChangePropertyAction" },
  { name: "foam/nanos/test/EchoService" },
  { name: "foam/nanos/test/SerializationTestEchoService" },
  { name: "foam/nanos/analytics/Foldable" },
  { name: "foam/nanos/analytics/Candlestick" },
  { name: "foam/nanos/test/ClientEchoService" },

  { name: "foam/dao/jdbc/JDBCConnectionSpec" },

  // foam/nanos/crunch
  { name: "foam/nanos/crunch/crunchtest/FakeTestObject" },
  // models
  { name: "foam/nanos/crunch/Renewable" },
  { name: "foam/nanos/crunch/Refinements" },
  { name: "foam/nanos/crunch/MinMaxCapability" },
  { name: "foam/nanos/crunch/MinMaxCapabilityData" },
  { name: "foam/nanos/crunch/CapabilityJunctionStatus" },
  { name: "foam/nanos/crunch/CapabilityIntercept" },
  { name: "foam/nanos/crunch/CapabilityJunctionPayload" },
  { name: "foam/nanos/crunch/lite/CapablePayloadStatusDAO" },
  { name: "foam/nanos/crunch/lite/Capable" },
  { name: "foam/nanos/crunch/lite/CapableDAO" },
  { name: "foam/nanos/crunch/lite/CapableAdapterDAO" },
  { name: "foam/nanos/crunch/lite/CapableObjectData" },
  { name: "foam/nanos/crunch/lite/CapableCompatibleCapability" },
  { name: "foam/nanos/crunch/lite/CapabilityRefinement" },
  { name: "foam/nanos/crunch/lite/MinMaxCapabilityRefinement" },
  { name: "foam/nanos/crunch/crunchtest/TestCapable" },
  { name: "foam/nanos/crunch/CapabilityAvailabilityDAO" },
  { name: "foam/nanos/crunch/example/ExampleData" },

  // crunch lite rulers
  { name: "foam/nanos/crunch/lite/ruler/CapableStatusChangeAdjustApprovalsRuleAction" },
  { name: "foam/nanos/crunch/lite/ruler/CapablePayloadApprovableRuleAction" },
  { name: "foam/nanos/crunch/lite/ruler/CapableCreateApprovalsRuleAction" },
  { name: "foam/nanos/crunch/lite/ruler/SetCapablePayloadStatusOnPut" },
  { name: "foam/nanos/crunch/lite/ruler/ReputDependantPayloads" },
  { name: "foam/nanos/crunch/lite/ruler/UCJApprovableValidateAction" },

  // crunch capability categories
  { name: "foam/nanos/crunch/CapabilityCategory" },
  { name: "foam/nanos/crunch/UserCapabilityJunctionRefine" },
  { name: "foam/nanos/crunch/CapabilityCapabilityJunctionRefine" },
  { name: "foam/nanos/crunch/CapabilityCategoryCapabilityJunctionRefine" },
  { name: "foam/nanos/crunch/RenewableData" },
  { name: "foam/nanos/crunch/UCJProperty" },
  { name: "foam/nanos/crunch/UCJUpdateApprovable" },
  { name: "foam/nanos/crunch/connection/CapabilityPayload" },
  { name: "foam/nanos/crunch/connection/GrantPathNode" },
  //daos
  { name: "foam/nanos/crunch/UserCapabilityJunctionDAO" },
  { name: "foam/nanos/crunch/connection/CapabilityPayloadDAO" },
  { name: "foam/nanos/crunch/PredicatedPrerequisiteCapabilityJunctionDAO" },
  //rules
  { name: "foam/nanos/crunch/SendNotificationOnTopLevelCapabilityStatusUpdate" },
  { name: "foam/nanos/crunch/IsUserCapabilityJunctionStatusUpdate" },
  { name: "foam/nanos/crunch/RemoveJunctionsOnUserRemoval" },
  { name: "foam/nanos/crunch/CrunchService" },
  { name: "foam/nanos/crunch/ClientCrunchService" },
  { name: "foam/nanos/crunch/ReputDependentUCJs" },
  //predicates
  { name: 'foam/nanos/crunch/predicate/CapabilityIsStatus' },
  { name: 'foam/nanos/crunch/predicate/CapabilityPrerequisitesGranted' },
  { name: 'foam/nanos/crunch/predicate/StatusChangedTo' },
  { name: 'foam/nanos/crunch/predicate/IsAgent' },
  { name: 'foam/nanos/crunch/predicate/CapabilityJunctionTransitionToStatus' },
  { name: 'foam/nanos/crunch/predicate/IsAgentUpdate' },
  //spid
  { name: "foam/nanos/auth/CreateUserCapabilityJunctionOnSpidSet" },
  { name: "foam/nanos/auth/SetUserServiceProviderJunctionRuleAction" },
  //ucjDAO rules
  { name: "foam/nanos/crunch/ruler/AuthorizeUCJStatusOnPut" },
  { name: "foam/nanos/crunch/ruler/CheckUCJOwnershipOnPut" },
  { name: "foam/nanos/crunch/ruler/ValidateUCJDataOnPut" },
  { name: "foam/nanos/crunch/ruler/SetUCJStatusOnPut" },
  { name: "foam/nanos/crunch/ruler/ConfigureUCJExpiryOnGranted" },
  { name: "foam/nanos/crunch/ruler/SaveUCJDataOnGranted" },
  //views
  { name: "foam/nanos/crunch/ui/WizardState" },
  { name: "foam/nanos/crunch/ui/ApprovableUserCapabilityJunctionWAO" },
  { name: "foam/nanos/crunch/ui/UserCapabilityJunctionWAO" },
  { name: "foam/nanos/crunch/ui/CapableWAO" },
  { name: "foam/nanos/crunch/ui/CapabilityWizardlet" },
  { name: "foam/nanos/crunch/ui/MinMaxCapabilityWizardlet" },
  { name: "foam/nanos/crunch/ui/MinMaxCapabilityWizardletSection" },
  { name: "foam/nanos/crunch/ui/ReviewCapabilityWizardlet" },
  { name: "foam/nanos/crunch/ui/ReviewCapabilityView" },
  { name: "foam/nanos/crunch/ui/CapableView" },
  { name: 'foam/nanos/crunch/ui/UCJView' },
  { name: "foam/nanos/crunch/ui/PrerequisiteAwareWizardlet" },
  //boxes
  { name: "foam/nanos/crunch/box/CrunchClientBox" },
  { name: "foam/nanos/crunch/box/CrunchClientReplyBox" },
  //extras
  { name: 'foam/nanos/crunch/extra/ReviewCapability' },
  { name: 'foam/nanos/crunch/extra/ReviewCapabilityData' },
  { name: 'foam/nanos/crunch/extra/ReviewWizard' },
  { name: 'foam/nanos/crunch/extra/ImplyReviewedAction' },
  //test
  { name: 'foam/nanos/crunch/test/CrunchTestSupport' },

  // approval
  { name: 'foam/nanos/approval/ApprovalRequest' },
  { name: 'foam/nanos/approval/ApprovalRequestNotification' },
  { name: 'foam/nanos/approval/ApprovalRequestNotificationNotificationCitationView', flags: ['web'] },
  { name: 'foam/nanos/approval/ApprovalStatus' },
  { name: 'foam/nanos/approval/ApprovableAware'},
  { name: 'foam/nanos/approval/PropertiesToUpdateView', flags: ['web'] },
  { name: 'foam/nanos/approval/Approvable' },
  { name: 'foam/nanos/approval/ApprovableAwareDAO' },
  { name: 'foam/nanos/approval/ApprovableApprovalRequestsPredicate' },
  { name: 'foam/nanos/approval/ApprovableApprovalRequestsRule' },
  { name: 'foam/nanos/approval/FulfilledApprovablePredicate' },
  { name: 'foam/nanos/approval/FulfilledNestedJournalApprovablePredicate' },
  { name: 'foam/nanos/approval/FulfilledApprovableRule' },
  { name: 'foam/nanos/approval/PopulateApprovalRequestsDAO' },
  { name: 'foam/nanos/approval/ApprovalRequestAssignedToRule' },
  { name: 'foam/nanos/approval/ApprovalRequestMemoRule' },
  { name: 'foam/nanos/approval/ApprovalRequestClassificationEnum' },
  { name: 'foam/nanos/approval/CompositeApprovable' },
  { name: 'foam/nanos/approval/CustomViewReferenceApprovable' },
  { name: 'foam/nanos/approval/FulfilledCompositeApprovableRule' },
  { name: 'foam/nanos/approval/RestrictedApprovableDAO' },

  //authservice
  { name: "foam/nanos/auth/CapabilityAuthService" },
  // google
  { name: "foam/nanos/geocode/GoogleMapsCredentials" },

  { name: "foam/demos/u2/AllViews" },
  { name: "foam/demos/u2/MDAllViews" },

  //IBAN
  { name: "foam/nanos/iban/IBANInfo" },
  { name: "foam/nanos/iban/ValidationIBAN" },
  { name: "foam/nanos/iban/test/ValidationIBANTest" },

  //notification
  { name: "foam/nanos/crunch/TopLevelCapabilityStatusUpdateNotification" },
]);
