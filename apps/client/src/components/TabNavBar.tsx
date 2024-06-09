import React, {  useState } from 'react';
import './TabNavBar.css';
import  getData  from './getdata';

// import JobCard from './JobCard';
// import JobDetail from './JobDetail';

const TabNavBar: React.FC = () => {
    

    // const jobs = [
    //     { id: 1, country: 'USA', location: 'New York', jobTitle: 'Software Engineer', baseSalary: '$120,000', requirements: 'BS in CS, 5+ years experience', criterions: 'Strong problem-solving skills', tools: 'React, Node.js', duration: 'Full-time', culture: 'Innovative, Fast-paced', companyLogo: 'path/to/logo1.png', companyName: 'Tech Corp' },
    //     { id: 2, country: 'Germany', location: 'Berlin', jobTitle: 'Data Scientist', baseSalary: '€80,000', requirements: 'MS in Data Science, 3+ years experience', criterions: 'Expert in Python', tools: 'TensorFlow, Pandas', duration: 'Full-time', culture: 'Collaborative, Research-focused', companyLogo: 'path/to/logo2.png', companyName: 'Data Inc' },
    //     // Add more jobs as needed
    // ];


//     const [job, setJobs] = useState([])

//   useEffect(() => {
//     fetch('/api/jobs').then((res) => res.text()).then(setJobs);
//   })

    const [activeTab] = useState('foryou');
    // const [selectedJob, setSelectedJob] = useState(jobs[0]);
    const data = getData();
    console.log('data ->',data);
    
    const renderContent = () => {
        switch (activeTab) {
            case 'foryou':
                return (
                    <div className="for-you">
                        <div className="job-list">
                        <h1>Items</h1>
                        <ul>
                            {}
                            {data?.job_title}
                            {/* {data?.jobs.map(item => (
                            <li key={item.id}>
                                <h2>{item.job_title}</h2>
                                <p>{item.ext_id}</p>
                            </li>
                            ))} */}
                        </ul>

                            {/* {jobs.map(jobcard => (
                                <JobCard
                                    key={jobcard.id}
                                    job={jobcard.jobTitle}
                                    onClick={() => setSelectedJob(jobcard)}
                                    isActive={jobcard.id === selectedJob.id}
                                />
                            ))} */}
                        </div>
                        {/* <JobDetail jobs={selectedJob} /> */}
                    </div>
                );
            case 'search':
                return <div>Search Content</div>;
            case 'activity':
                return <div>Activity Content</div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="tab-navbar">
                <div className={`tab-item ${activeTab === 'foryou' ? 'active' : ''}} onClick={() => setActiveTab('foryou')`}>For You</div>
                <div className={`tab-item ${activeTab === 'search' ? 'active' : ''}} onClick={() => setActiveTab('search')`}>Search</div>
                <div className={`tab-item ${activeTab === 'activity' ? 'active' : ''}} onClick={() => setActiveTab('activity')`}>Activity</div>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
}

export default TabNavBar;