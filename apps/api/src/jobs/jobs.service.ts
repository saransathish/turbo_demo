import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobsService {
    constructor(private prisma:PrismaService){}

    async findAll(){
        return this.prisma.prismaClient.job.findMany();
    }


    async jobsearch(title:string){
        const jobs = await this.prisma.prismaClient.job.findMany({
            where:{
                job_title:{
                    contains:title,
                    mode: 'insensitive',
                }
            }
        })

        return jobs

    }

    async joblocation(city:string){
        const jobs = await this.prisma.prismaClient.job.findMany({
            where:{
                location:{
                    contains:city,
                    mode: 'insensitive',
                }
            }
        })

        return jobs

    }

    // async findOne(id:number){
    //     return this.prisma.prismaClient.user.findUnique({
    //         where:{id},
    //     })
    // }

    // async create(data:any) {
        
    //     return this.prisma.prismaClient.jobPosting.create({data})
    // }

    // async update(id:number , data:any) {
    //     return this.prisma.prismaClient.user.update({where:{id},data})
    // }

    // async remove(id:number){
    //     return this.prisma.prismaClient.user.delete({where:{id}})
    // }


    async updatedb(){
        const fs = require('fs');
        const jobData = JSON.parse(fs.readFileSync('./src/jobs/output_file.json', 'utf8'));
        for (const jo of jobData) {
            // const jo = JSON.parse(jobs)
            await this.prisma.prismaClient.job.create({
                data:{
 
                    // id:jo.id,
                    ext_id:jo.ext_id,
                    company_id:jo.company_id,
                    company_name :jo.company_name,
                    company_logo :jo.company_logo,
                    company_website_url:jo.company_website_url,
                    company_linkedin_url :jo.company_linkedin_url,
                    company_twitter_handle :jo.company_twitter_handle,
                    company_github_url :jo.company_github_url,
                    job_title :jo.job_title,
                    location  :jo.location,
                    type_id  :jo.type_id,
                    type_name  :jo.type_name,
                    city_geonameid :jo.city_geonameid,
                    city_asciiname :jo.city_asciiname,
                    city_name :jo.city_name,
                    city_country_code :jo.city_country_code,
                    city_country_name :jo.city_country_name,
                    city_country_region_id :jo.city_country_region_id,
                    city_country_region_name :jo.city_country_region_name,
                    city_timezone  :jo.city_timezone,
                    city_latitude  :jo.city_latitude,
                    city_longitude :jo.city_longitude,
                    country_code   :jo.country_code,
                    country_name   :jo.country_name,
                    country_region_id :jo.country_region_id,
                    country_region_name   :jo.country_region_name,
                    region_id             :jo.region_id,
                    region_name           :jo.region_name,
                    has_remote            :jo.has_remote,
                    published             :jo.published,
                    description           :jo.description,
                    experience_level      :jo.experience_level,
                    application_url       :jo.application_url,
                    language              :jo.language,
                    clearance_required    :jo.clearance_required,
                    salary_min            :jo.salary_min,
                    salary_max            :jo.salary_max,
                    salary_currency       :jo.salary_currency

                }
            });
            console.log('Data added successfully');
        }
        return 'Data added successfully'
    
    }
}
