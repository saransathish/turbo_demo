import React from 'react';
import './JobDetail.css'
import JobIcon from '../assets/jobicon.jpg'

interface JobDetailProps {
  company: string;
  rating: number;
  title: string;
  location: string;
  employmentType: string;
  closingDate: string;
  summary: string;
  applyUrl: string;
  salary?: number;
  logoUrl?: string; // Optional logo URL
}

const JobDetail: React.FC<JobDetailProps> = ({
  company = "LevenTM Technology", // Default company name
  // Default rating
  title = "", // Default empty title
  location = "", // Default empty location
  employmentType = "", // Default empty employment type
  closingDate = "", // Default empty closing date
  summary = "As a Data Platform Engineering Analyst, you bridge the hardware-software boundary. You collaborate to create and maintain our data and automation platforms that power data integrations so that our users can access highly reliable data assets and solutions. As a member of the team and data custodian, you will have a big impact on supporting the delivery of customer value in the data integration and platform extension space",
  applyUrl = "https://www.example.com/jobs/data-scientist", // Example apply URL
  salary = 120000, // Default approximate salary
  
}) => {
  return (
    <div className="job-detail">
      <div className="job-detail__header">
        { ( // Only display logo if logoUrl is provided
          <img src={JobIcon} alt={`${company} Logo`} className="job-detail__header__logo" />
        )}
    
        <div className="job-detail__header__company">
          {company}
          {/* <span className="job-detail__header__company__rating">{rating}</span> */}
        </div>
        <a href={applyUrl} className="job-detail__header__apply">
          Apply on employer site
        </a>
      </div>
      <div className="job-detail__info">
        <div className="job-detail__info__title">{title}</div>
        <div className="job-detail__info__location">{location}</div>
        <div className="job-detail__info__employment-type">{employmentType}</div>
        <div className="job-detail__info__closing-date">{closingDate}</div>
      </div>
      <div className="job-detail__summary">{summary}</div>
      {salary > 0 && ( // Only display salary if it has a value
        <div className="job-detail__salary">Salary: ${salary.toLocaleString()}</div>
      )}
    </div>
  );
};

export default JobDetail;
