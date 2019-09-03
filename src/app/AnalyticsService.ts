export class AnalyticsService{
	created(){ console.log('called, this should have thrown an error because this file shouldnt have real code in it.'); }
}

export const analyticsService = new AnalyticsService();
