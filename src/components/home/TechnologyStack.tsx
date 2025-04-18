'use client';
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const techStack = [
  {
    category: "Cloud & Compute",
    tools: ["Azure Synapse", "AWS Redshift", "GCP BigQuery", "Databricks", "Snowflake"],
  },
  {
    category: "AI/ML Frameworks",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain"],
  },
  {
    category: "Data Pipelines",
    tools: ["Apache Kafka", "Spark", "Airflow", "dbt"],
  },
  {
    category: "Visualization & Analytics",
    tools: ["Power BI", "Tableau", "Looker", "Grafana"],
  },
  {
    category: "DevOps & MLOps",
    tools: ["Kubernetes", "Docker", "MLflow", "Azure DevOps", "GitHub Actions"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TechnologyStack: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#eae6e6] via-[#e77b3d] to-[#fffefe]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4 text-gray-900"
        >
          Our Technology Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-800 text-lg mb-12 max-w-2xl mx-auto"
        >
          We leverage the latest in cloud-native and AI-native ecosystems, including but not limited to:
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left"
        >
          {techStack.map(({ category, tools }, index) => (
            <motion.div
              key={category}
              variants={item}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-orange-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">{category}</h3>
              </div>
              <ul className="space-y-2 text-gray-700 pl-1">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-orange-500"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
