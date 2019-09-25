import { Error404PageConfig } from "./errors/404/Error404PageConfig";
import { Error500PageConfig } from "./errors/500/Error500PageConfig";
import { MaintenancePageConfig } from "./maintenance/MaintenancePageConfig";
import { ModernInvoicePageConfig } from "./invoices/modern/ModernInvoicePageConfig";
import { CompactInvoicePageConfig } from "./invoices/compact/CompactInvoicePageConfig";
import { ProfilePageConfig } from "./profile/ProfilePageConfig";
import { ClassicSearchPageConfig } from "./search/classic/ClassicSearchPageConfig";
import { ModernSearchPageConfig } from "./search/modern/ModernSearchPageConfig";
import { KnowledgeBasePageConfig } from "./knowledge-base/KnowledgeBaseConfig";
import { AnalyticsDashboardAppConfig } from "./dashboards/analytics/AnalyticsDashboardAppConfig";
import { ProjectDashboardAppConfig } from "./dashboards/project/ProjectDashboardAppConfig";
import { MailAppConfig } from "./mail/MailAppConfig";
import { TodoAppConfig } from "./todo/TodoAppConfig";
import { ContactsAppConfig } from "./contacts/ContactsAppConfig";
import { CalendarAppConfig } from "./calendar/CalendarAppConfig";
import { ChatAppConfig } from "./chat/ChatAppConfig";
import { ECommerceAppConfig } from "./e-commerce/ECommerceAppConfig";
import { NotesAppConfig } from "./notes/NotesAppConfig";

export const pagesConfigs = [
  Error404PageConfig,
  Error500PageConfig,
  MaintenancePageConfig,
  ModernInvoicePageConfig,
  CompactInvoicePageConfig,
  ProfilePageConfig,
  ClassicSearchPageConfig,
  ModernSearchPageConfig,
  KnowledgeBasePageConfig,
  AnalyticsDashboardAppConfig,
  ProjectDashboardAppConfig,
  MailAppConfig,
  TodoAppConfig,
  ContactsAppConfig,
  CalendarAppConfig,
  ChatAppConfig,
  ECommerceAppConfig,
  NotesAppConfig
];
