export default function App() {
  return (
    <>
      <header className="mt-[10px] mb-[10px] mx-auto w-5/6 bg-[#EDF6FF] py-5 rounded">
        <h1 className="text-center text-4xl text-[#0471A6] font-bold">Data Mining Project</h1>
        <h4 className="text-center text-[#0471A6] mt-2">By: Octavio De La Hoz Franco</h4>
      </header>
      <main className="my-[30px] mx-auto w-5/6 px-8 py-7 bg-[#FFFEF6] border border-[#F5F5F5] rounded">
        <section className="mb-[30px]">
          <div className="text-2xl text-[#0471A6] border-b">Introduction</div>
          <br />
          <p className="text-[#39393A]">
            In today's dynamic financial landscape, the ability to accurately assess and predict a company's financial
            health is of paramount importance. This project aims to leverage advanced data mining techniques to analyze
            the financial statements of various companies in Colombia—specifically the balance sheet, income statement,
            and cash flow statement. By applying a combination of machine learning models, including Linear and Multiple
            Regression, Decision Trees and Random Forest, we intend to explore both linear and non-linear relationships
            between financial variables.
          </p>
          <br />
          <p className="text-[#39393A]">
            The project will focus on predicting key financial indicators while also classifying companies into
            categories of financial stability and risk. By utilizing multiple models, we aim to capture the complexity
            of financial data, providing more robust and reliable predictions. This analysis will offer valuable
            insights for investors and stakeholders, helping them make informed decisions based on the financial
            health and future performance of these companies.

          </p>
          <br />
          <p className="text-[#39393A]">
            Through extensive data preprocessing, feature engineering, and model validation, we will ensure that our
            predictions are both accurate and interpretable, ultimately contributing to a deeper understanding of
            corporate financial dynamics.
          </p>
        </section>
        <section>
          <div className="text-2xl text-[#0471A6]">Model Selection and Justification</div>
          <br />
          <p className="text-[#39393A]">
            In selecting the machine learning models for this project, a combination of Linear and Multiple Regression,
            Decision Trees and Random Forest probably has been chosen to address the complexity of financial
            data and enhance predictive accuracy. Each of these models offers unique advantages that align with the goals
            of predicting financial indicators and assessing company stability.
          </p>
          <br />
          <p className="text-[#39393A]">
            <strong><em>Linear and Multiple Regression</em></strong> are fundamental techniques used to understand and quantify relationships
            between variables. In the financial sector, these models are particularly useful for predicting continuous
            financial metrics such as earnings per share (EPS) or stock prices. Their main advantage lies in their
            simplicity and interpretability, which makes them valuable for identifying linear relationships between
            financial indicators. However, they may struggle with capturing complex, non-linear relationships and
            interactions between variables, which can limit their effectiveness in more intricate financial datasets.
          </p>
          <br />
          <p className="text-[#39393A]">
            <strong><em>Decision Trees</em></strong> provide a visual representation of decision-making processes and are beneficial for
            classifying companies into different risk categories based on their financial health. They handle
            non-linear relationships well and are relatively easy to interpret. Nonetheless, they can be prone to
            overfitting, especially with smaller datasets, which may lead to less generalizable results.
          </p>
          <br />
          <p className="text-[#39393A]">
            <strong><em>Random Forest</em></strong> is an ensemble method that builds upon the concept of decision trees by aggregating
            multiple trees to improve predictive performance and robustness. This model excels in handling large
            datasets with complex relationships and can provide accurate predictions while mitigating the risk of
            overfitting. It is particularly advantageous for financial analysis as it can handle various financial
            metrics and interactions between them effectively. Despite its strengths, Random Forest models can be
            less interpretable compared to simpler models, which may pose challenges in understanding the underlying
            decision-making process.
          </p>
        </section>
        <section className="my-[30px]">
          <div className="text-2xl text-[#0471A6]">Real-World Examples and References</div>
          <br />
          <p className="text-[#39393A]">
            These models have been widely applied in the financial sector. For instancea and Random Forest are
            commonly used in credit scoring and risk assessment due to their ability to handle complex data and
            provide robust predictions. Research by Chen et al. (2018) demonstrated the effectiveness of ensemble
            methods like Random Forest in predicting stock market returns and financial distress. Similarly,
            Decision Trees have been utilized in portfolio management to classify investment opportunities based
            on financial indicators (Mendoza et al., 2019). By leveraging these models, this project aims to provide
            a comprehensive analysis of financial health and risk, offering valuable insights for investors and
            stakeholders in the Colombian market.
          </p>
        </section>
        <section className="mt-[40px]">
          <p className="text-sm italic text-[#AC80A0]">
            <b>Note:</b> It is important to note that, following a more in-depth analysis of the different models, there is a
            possibility that I may ultimately choose to use only one model if it demonstrates a high level of
            effectiveness and reliability in predicting financial outcomes. This decision will be based on the model's
            ability to provide consistent and accurate results. Alternatively, depending on the data and financial
            indicators under study, I may opt to combine two or more models to leverage their individual strengths and
            enhance the overall predictive performance. This flexible approach will ensure that the chosen methodology
            aligns with the project's goals and delivers the most robust insights.
          </p>
        </section>
      </main>
    </>
  )
}
