import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { get } from 'http';
import { connected, title } from 'process';

@Controller('jobs')
export class JobsController {

    constructor(private jobservices: JobsService){}

    @Get()
    findAll(){
        return this.jobservices.findAll();
    }


    @Post('')
    jobsearch(@Body('title') title :string){
        console.log("seraching jobs");
        return this.jobservices.jobsearch(title);
    }
    @Post('/city')
    joblocation(@Body('city') title :string){
        console.log("seraching locations");
        return this.jobservices.joblocation(title);
    }
    
    // @Get(':id')
    // findOne(@Param('id') id:string){
    //     return this.jobservices.findOne(+id);
    // }

    // @Post()
    // create(@Body() body:any){
    //     return this.jobservices.create(body);
    // }



    // @Put()
    // update(@Param('id') id:string,@Body() body:any){
    //     return this.jobservices.update(+id , body);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: number){
    //     return this.jobservices.remove(+id)
    // }


    // @Get('/updatedatas')
    // updatedb(){
    //     return this.jobservices.updatedb();
    // }

}
