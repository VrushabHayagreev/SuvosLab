import React from "react";
import {

  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PaperPublicationPage = () => {
  const publications = [
    {
      year: 2023,
      papers: ["Genomic study of maternal lipid traits in early pregnancy concurs with four known adult lipid loci"],
    },
    {
      year: 2022,
      papers: ["Ancestry-Matched and Cross-Ancestry Genetic Risk Scores of Type 2 Diabetes in Pregnant Women and Fetal Growth: A Study in an Ancestrally Diverse Cohort", "eP227: Placental accelerated aging in antenatal depression", "Sex-specific placental gene expression signatures of small for gestational age at birth", "Placental multi-omics integration identifies candidate functional genes for birthweight", "Differential expression of single‐cell RNA‐seq data using Tweedie models", "Recreational physical activity before and during pregnancy and placental DNA methylation—an epigenome-wide association study"],
    },
    {
      year: 2021,
      papers: ["Pleiotropic genetic influence on birth weight and childhood obesity", "Predictors of 30-day unplanned readmission after carotid artery stenting using artificial intelligence", "An Epigenome Wide Association Study Reveals Timing of Physical Activity During Pregnancy Is Associated With Placental DNA Methylation", "Causes, predictors, and costs of unplanned 30-day readmissions in patients with right heart failure", "Impact of depression and stress on placental DNA methylation in ethnically diverse pregnant women", "Omics community detection using multi-resolution clustering", "Placental Gene Co-expression Network for Maternal Plasma Lipids Revealed Enrichment of Inflammatory Response Pathways", "Genetic and in utero environmental contributions to DNA methylation variation in placenta", "Multivariable association discovery in population-scale meta-omics studies"],
    },
   
  ];

  return (
    <div className="p-10">
      <h1 className="text-primary text-3xl font-black mb-4">
        Paper Publications{" "}
      </h1>

      {publications.map((publication) => (
        <Accordion key={publication.year}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h1 className="text-xl font-semibold">{publication.year} </h1>
          </AccordionSummary>

          <div className="pl-5">
          <List>
            {publication.papers.map((paper, index) => (
              <ListItem key={index}>
               <a href="/" className="flex flex-row space-x-2"><div className="w-2 h-2 mt-2 rounded-full bg-black"></div>  <h1 className="text-md">{paper}</h1></a>
              </ListItem>
            ))}
            </List>
          </div>
        </Accordion>
      ))}
    </div>
  );
};

export default PaperPublicationPage;
