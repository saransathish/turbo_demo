// src/components/JobCard.tsx
import React from 'react';
import './JobCard.css';
import JobIcon from '../assets/jobicon.jpg'
import { FaBookmark } from 'react-icons/fa';
import { Job } from './job-interface';


  
interface JobCardProps {
    job: Job;
    onClick: () => void;
    isActive: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick, isActive }) => {
    return (
        <div className={`job-card ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className="job-header">
                <div className="company-info">
                    <img src={JobIcon} alt={job.company_logo} className="company-logo" />
                    <div className="company-name">{job.company_name}</div>
                </div>
                <button className="bookmark-button">
                <FaBookmark />
            </button>

            </div>
            <div className="job-title">{job.job_title}</div>
            <div className="job-location">{job.location}</div>
            <div className="job-salary">{job.salary_currency}</div>
        </div>
    );
}

export default JobCard;