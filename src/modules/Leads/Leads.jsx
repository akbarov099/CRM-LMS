// Leads.jsx
import { useState } from "react";
import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { MdGroupAdd } from "react-icons/md";
import { LeadsMain } from "./components/LeadsMain";
import { AddLeadModal } from "./components/AddLeadModal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LuFolderClock } from "react-icons/lu";

export const Leads = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leads, setLeads] = useState([]); 

  const handleAddLead = (newLead) => {
    setLeads((prev) => [...prev, newLead]);
  };

  return (
    <>
      <Header title={"Лиды"} />
      <main>
        <div className="container">
          <HeaderToolbar
            textBtn={t("createlead")}
            btnicon={MdGroupAdd}
            onBtnClick={() => setIsModalOpen(true)}
          />
          <LeadsMain leads={leads} setLeads={setLeads} />
          <Link to="/leads/arxiv" className="board__btn">
            <button className="arxiv">
              <LuFolderClock className="arxiv__icon" />
              {t("archive")}
            </button>
          </Link>
        </div>
      </main>

      <AddLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddLead}
      />
    </>
  );
};