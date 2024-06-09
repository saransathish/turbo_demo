export interface Job {
    id: number;
    ext_id: string;
    company_id: number;
    company_name: string;
    company_logo?: string;
    company_website_url?: string;
    company_linkedin_url?: string;
    company_twitter_handle?: string;
    company_github_url?: string;
    job_title: string;
    location: string;
    type_id: number;
    type_name: string;
    city_geonameid?: number;
    city_asciiname?: string;
    city_name?: string;
    city_country_code?: string;
    city_country_name?: string;
    city_country_region_id?: number;
    city_country_region_name?: string;
    city_timezone?: string;
    city_latitude?: string;
    city_longitude?: string;
    country_code?: string;
    country_name?: string;
    country_region_id?: number;
    country_region_name?: string;
    region_id?: number;
    region_name?: string;
    has_remote?: boolean;
    published: Date;
    description: string;
    experience_level?: string;
    application_url: string;
    language: string;
    clearance_required: boolean;
    salary_min?: number;
    salary_max?: number;
    salary_currency?: string;
  }

  export interface GetJobData {
    jobs: Job[];
  }

  export interface demodata {
    id: number;
    ext_id: string;
    job_title: string;


    
  }