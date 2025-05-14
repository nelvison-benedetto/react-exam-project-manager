import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalProvider";
import { Link } from "react-router-dom";

export default function CompaniesPage(){

    const {groupCompaniesState} = useContext(GlobalContext);
    const {companies, setCompanies} = groupCompaniesState;

    return (
      <>
        <div className="container mt-4">
          <h2 className="mb-4">Companies</h2>
          <div className="row">
            {companies.map((company) => (
              <div key={company.id} className="col-md-4 mb-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      {company.companyLegalName}
                    </h5>
                    <div className="card-text">
                      <p className="mb-0">
                        <strong>companyEIN</strong> {company.companyEIN}
                      </p>
                      <p>
                        <strong>companyStateTaxID</strong> {company.companyStateTaxID}
                      </p>
                    </div>
                    {company && (
                    <Link to={`/companies/${company.id}`} className="btn btn-sm btn-primary w-100 mt-3">
                      Show
                    </Link>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}