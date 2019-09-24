import { Error404PageConfig } from "./errors/404/Error404PageConfig";
import { Error500PageConfig } from "./errors/500/Error500PageConfig";
import { MaintenancePageConfig } from "./maintenance/MaintenancePageConfig";
import { ModernInvoicePageConfig } from "./invoices/modern/ModernInvoicePageConfig";
import { CompactInvoicePageConfig } from "./invoices/compact/CompactInvoicePageConfig";
import { ProfilePageConfig } from "./profile/ProfilePageConfig";
import { ClassicSearchPageConfig } from "./search/classic/ClassicSearchPageConfig";
import { ModernSearchPageConfig } from "./search/modern/ModernSearchPageConfig";
import { KnowledgeBasePageConfig } from "./knowledge-base/KnowledgeBaseConfig";

export const pagesConfigs = [
  Error404PageConfig,
  Error500PageConfig,
  MaintenancePageConfig,
  ModernInvoicePageConfig,
  CompactInvoicePageConfig,
  ProfilePageConfig,
  ClassicSearchPageConfig,
  ModernSearchPageConfig,
  KnowledgeBasePageConfig
];
