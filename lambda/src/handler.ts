import { ApiHandler } from './shared/api-interfaces';
import { HealthTrackerController } from './controllers/ht-controller';

const controller: HealthTrackerController = new HealthTrackerController();

export const getStatistics: ApiHandler = controller.getStatistics;
export const postSurvey: ApiHandler = controller.postSurvey;
export const getOrganisation: ApiHandler = controller.getOrganisation;
