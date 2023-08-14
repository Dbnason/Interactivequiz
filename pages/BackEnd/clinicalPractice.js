const questions = [
    {
      question: "1. Christopher, a 5-year-old with mild persistent asthma, presents in clinic with an acute upper-respiratory infection. He is accompanied by his mother. which of the following is true about asthma?",
      answers: [
        "a. Air exchange into the blood stream in the alveoli is impaired by mucus.",
        "b. Chronically inflamed airways are hyper-responsive to triggers.",
        "c. Pulse oximetry is the best method for assesing ashthma control at home.",
        "d. Symptoms include continual wheezing, coughing, and chest discomfort."
      ]
    },
    {
      question: "2. Christopher's mother reports his symptoms had been significantly better for the past month, so she has not refilled his costly medications for several weeks. Which of the medications was most likely to have been prescribed daily for control of Christopher's mild persistent asthma?",
      answers: [
        "a. Oral corticosteroid",
        "b. Oral bronchodilator",
        "c. Low-dose inhaled corticosteroid", 
        "d. Inhaled short-acting beta-2 antagonist"
      ]
    },
    {
      question: "3. Christopher's peak flow rate today is 70% of his personal best rate. What does this indicate?",
      answers: [
        "a. Green zone - good control of asthma. Continue with current medication plan.",
        "b. Blue zone - moderate control of asthma. Continue long-acting drug and monitor closely.", 
        "c. Yellow zone - caution. Take quick relief medication and monitor.", 
        "d. Red zone - danger. Take quick relief drug and seek medical care if no immediate response."
      ]
    },
    {
      question: "4. Christopher's mother has some misconceptions about asthma. Which one of the following beliefs about asthma is true?",
      answers: [
        "a. Asthma is linked to select mental health diagnoses.", 
        "b. Asthma medications can lose effectiveness over time, so they should be used sparingly.", 
        "c. Even if his asthma is controlled, Christopher should limit his physical activity and avoid strenuous exercise.", 
        "d. Asthma exacerbations rarely occur suddenly, without any warning signs."
      ]
    },
    {
      question: "5. An adult parent calls the clinic for advice about selfcare for symptoms of sinusitis. The nursing intervention should include: ",
      answers: [
        "a. Advising increased fluids and humidification.", 
        "b. Determining the color and amount of nasal drainage.", 
        "c. Assesing facial pain using a 10-point scale.", 
        "d. Determining the effectiveness of over-the-counter(OTC) decongestants."
      ]
    },
    {
      question: "6. Vincent, age 46, has recently been diagnosed with pulmonary tuberculosis. He stated that he has been feeling ill for several weeks, but sought medical attention when he began coughing up bloody secretions. Which of the following symptoms are also experienced commonly by persons with active tuberculosis?",
      answers: [
        "a. Increased appetite and weight gain", 
        "b. Fatigue, lymph node enlargement, and night sweats", 
        "c. Slow pulse rate, edema, and warm, dry skin", 
        "d. High fever and shaking chills"
      ]
    },
    {
      question: "7. The mother of a 3-year-old boy, Chase, calls the primary care clinic for advice about Chase's fever. She reports Chase does not appear to be uncomfortable, is playing quietly, and is eating and drinking, but his temperature is 101.0° F orally. The nurse should recommend which of the following?",
      answers: [
        "a. Administer acetaminophen, dosing according to the guidelines on the clinic website.", 
        "b. Administer acetaminophen if temperature exceeds 102° F orally, and alternate with ibuprofen according to clinic guidelines.", 
        "c. Dress in lightweight clothing and avoid overdressing. Avoid bundling blankets.", 
        "d. Sponge with lukewarm water to lower Chase's temperature but avoid chilling him."
      ]
    },
    {
      question: "8. Which of the following is an example of primary prevention?",
      answers: [
        "a. Sex education", 
        "b. Biopsy of a skin lesion", 
        "c. Mammogram", 
        "d. Use of lipid-lowering drugs"
      ]
    },
    {
      question: "9. Telophone triage is: ",
      answers: [
        "a. All care and services provided within the scope of nursing practice that are delivered via the telephone.", 
        "b. An interaction that occurs over the telephone involving identification of the nature and urgency of the client's health care needs and determination of the appropriate disposition.", 
        "c. The delivery of health services that integrate electronic information and telecommunications technology to promote access in an efficient high-quality manner.", 
        "d. The delivery, management, and coordination of health care services provided via telecommunication technology."
      ]
    },
    {
      question: "10. Which of the following examples would best describe a nurse appropriately using clinical reasoning in telephone nursing?",
      answers: [
        "a. A nurse who tells a child's mother that based on cough intensity, the child may have pneumonia.", 
        "b. A nurse advises a patient that their chest pain might just be indigestion and not to worry.", 
        "c. A nurse asking how many episodes of diarrhea the oncology patient had today while on chemotherapy.", 
        "d. A nurse recognizing that sudden facial numbness and slurred speech are signs of a stroke."
      ]
    },
    {
      question: "11. A 26-year-old female patient calls the clinic and states that she has the \" worst pain i've ever had \" in her abdomen. The nurse should: ",
      answers: [
        "a. Refer her immediately to an emergency department.", 
        "b. Instruct her to call 9-1-1.", 
        "c. Ask to speak to another member of the household to verify the intesity of the pain.", 
        "d. Further asseses the characteristics and location of the pain and related symptoms."
      ]
    },
    {
      question: "12. A nurse practices in an organization that uses online protocols to guide telehealth nursing practice. The value of a set of decision support tools is that the tools: ",
      answers: [
        "a. Replace having to apply the nursing process to meet patient needs, so may be used by assistive personnel.", 
        "b. Serve as a checklist to increase the likelihood that nothing of importance is overlooked.", 
        "c. Improve the probability that the care recommended will be covered and reimbursed by third-party payers.", 
        "d. Are more reliable than hard copy books of protocols."
      ]
    },
    {
      question: "13. A 53-year-old woman calls complaining of acute low back pain after a long day of gardening. The pain increases with movement, so she has been resting on her family room couch, trying to stay as still as possible. The nurse ruled out underlying disease processes per protocol and has concluded the pain is most likely due to muscle strain. In developing a self-care plan with the patient, which of the following would be the nurse's BEST recomendation?",
      answers: [
        "a. Continue to rest on the couch for a day or two, taking nonsteroidal anti-inflammatory drugs(NSAIDs) every 4-6 hours.", 
        "b. The couch is probably to soft. Instead, rest on a firm surface for a day or two, with knees bent instead take NSAIDs.", 
        "c. Maintain activities as tolerated. Bed rest is not recommended.", 
        "d. Heat compresses to the back when resting is recommended."
      ]
    },
    {
      question: "14. In school-aged children with acute vomitting, rehydration therapy would best include which of the following?",
      answers: [
        "a. Half-strength sports drinks", 
        "b. Half-strength fruit juices", 
        "c. Flat soft drinks", 
        "d. Protein drinks"
      ]
    },
    {
      question: "15. A nurse finds an unconscious elderly woman on the floor in the clinic restroom. After establishing unresponsiveness, the nurse's first action is to: ",
      answers: [
        "a. Check for breathing and call for help.", 
        "b. Move patient to an area where the clinicians can better treat her and activate Emergency Medical Services(EMS).", 
        "c. Begin chest compressions and rescue breathing in a 30:2 ratio.", 
        "d. Obtain the automatic external defibrillator and apply pads to assess the need for defibrillation."
      ]
    },
    {
      question: "16. John, age 25, is brought to the front desk of the outpatient clinic by his very anxious friends. They say John complained suddenly of lightheadedness and shortness of breath while they were playing basketball outdoors. They think he may have been stung by an insect. The nurse should first: ",
      answers: [
        "a. Prepare to administer epinephrine 1:1,000 dillution, 0.3-0.5 ml.", 
        "b. Assess for increased blood pressure.", 
        "c. Try to get John to relax and do pursed-lip-breathing.", 
        "d. Assess airway and vital signs; notify EMS."
      ]
    },
    {
      question: "17. A 2-year-old's father has called to report the child is crying inconsolably and pulling on his left ear. He says the child has had ear infections before, and he has amoxicillin left over from the last infection. He asks the triage nurse if he should start the chile on amoxicillin while the nurse checks with the provider about an additional course of treatment. The nurse's BEST response would be: ",
      answers: [
        "a. Your child really needs to be evaluated by a physician or NP in our office to determine if this is an ear infection and how to best treat it.", 
        "b. No, because ear infections often resolve on their own without antibiotics. We recommend that you give him acetaminophen and decongestants and let us know if he doesn't get better.", 
        "c. No, because the amoxicillin may not be any good anymore.", 
        "d. The reason your child probably has repeated ear infections is that we no longer prescribe amoxicillin for ear infections. There is a different antibiotic which is now preferred."
      ]
    },
    {
      question: "18. Which of the following are signs of volume overload in a patient with chronic heart failure?",
      answers: [
        "a. Edema, neck vein distension, sudden weight gain", 
        "b. Hypertension, fatigue, productive cough", 
        "c. Night sweats, excess urination, cardiac arrthymias", 
        "d. Headache, weight loss, depression"
      ]
    },
    {
      question: "19. A 26-year-old single parent of two young children, with very little income, asks the nurse about possible sources of help with health care expenses. Which government resources would the patient most likely to be eligible to recieve?",
      answers: [
        "a. Medicare parts A and B", 
        "b. Medicare part D", 
        "c. TriCare", 
        "d. Medicaid"
      ]
    },
    {
      question: "20. In managing pain in culturally diverse populations, the following steps would be helpful for the nurse to develop cultural competency and humility except for: ",
      answers: [
        "a. Developing holistic care to patients as long as they are open and accepting of pain management plan.", 
        "b. Re-envisioning how being human links people of various cultures together", 
        "c. Understanding one's own personal preconceived notions about different cultures", 
        "d. Developing relationships and acknowledging patients and caregivers in a professional and personal level."
      ]
    },
    {
      question: "21. In a family practice clinic, the nurse observes a medical assistant preparing to take the blood pressure(BP) of a 66-year-old for a general medical examination. Which of the following is NOT true?",
      answers: [
        "a. In addition to sitting, standing BP is recommended.", 
        "b. The medical assistant should take the BP while the patient is seated on the exam table after waiting 5 minutes.", 
        "c. Patients should abstain from smoking or drinking caffeinated beverages prior to the readings.", 
        "d. The medical assistant should use a cuff with a bladder that covers two-thirds of the length of the upper arm and 80% of the circumference of the upper arm."
      ]
    },
    {
      question: "22. Which of the following is true about chronic obstructive pulmonary disease(COPD)?",
      answers: [
        "a. Airway limitation is fully reversible with medical therapies.", 
        "b. Spirometry is required to establish the diagnosis of COPD.", 
        "c. Cough is a symptom found only in later stages of the disease.", 
        "d. Conjugated pneumococcal pneumonia in patients with COPD."
      ]
    },
    {
      question: "23. Which agency collects reports of medication-related hazards and disseminates medication safety information, risk-reduction tools, error-prevention strategies?",
      answers: [
        "a. Institute for Safe Medication Practices", 
        "b. Occupational Safety and Health Administration(OSHA)", 
        "c. Centers for Disease Control and Prevention(CDC)", 
        "d. United States Preventative Services Task Force(USPSTF)"
      ]
    },
    {
      question: "24. Joshua is a 5-year-old with sickle cell disease. His mother called to report Joshua has a fever over 101.5° orally and mild leg pain. The nurse should: ",
      answers: [
        "a. Advise the mother about the dose of acetaminophen or ibuprofen to administer orally and to call back if the fever does not go down.", 
        "b. Tell the mother to bring Joshua in right away to be evaluated.", 
        "c. Do a thorough pain assessment, including location, onset, and severity using an appropriate pain scale. ", 
        "d. Assess Joshua's fluid intake and output in the past several hours."
      ]
    },
    {
      question: "25.The statement that best describes prediabetes is:",
      answers: [
        "a. Prediabetes is irreversible and will develop into diabetes over time.", 
        "b. The disease is a result of damaged pancreatic beta cells", 
        "c. Slightly elevated fasting blood glucose and hemoglobin A1C levels is typical with prediabetes.", 
        "d. Oral diabetes medications are necessary to treat prediabetes."
      ]
    },
    {
      question: "26. Which of the following is the highest priority in the educational plan for a woman newly diagnosed with type 2 diabetes?",
      answers: [
        "a. Weigh daily and report variations in weight of 4 or more pounds per week.", 
        "b. Psychological support to enhance coping skills.", 
        "c. Recognize acute complications such as hyperglycemia or hypoglycemia, and when to seek medical advice.", 
        "d. Carefully control diabetes to prevent complications including cardiovascular disease, loss of vision, neuropathy, and kidney damage."
      ]
    },
    {
      question: "27. Joe is a 68-year-old patient with a 7-year history of type 2 diabetes. He also has a history of hypertension and hyperlipidemia. Recently his blood glucose control has become less stable, with episodes of hypergylcemia that cause polyuria, especially at night. Which of the following referral resources could help imporve Joe's diabetes control?",
      answers: [
        "a. Endocrinologist, dietitian, mental health professional", 
        "b. Endocrinologist, dietitian, clinical pharmacist", 
        "c. Physical therapist, diabetes educator, home care nurse", 
        "d. Social worker, physical therapsit, neurologist"
      ]
    },
    {
      question: "28. For Joe's hhyperlipidemia, he has been prescribed simvastatin (Zocor) 10 mg at bedtime daily. His lipid profile drawn yesterday shows his low-density lipoprotein cholesterol (LDL) is 180 mg/dl and his high-density lipoprotein cholesterol (HDL) is 25 mg/dl. What conclusion would you draw?",
      answers: [
        "a. His lipids are well controlled. NO change is indicated.", 
        "b. His lipids are not fully controlled and he may need to increase his simvastatin dosage", 
        "c. His lipids are not well controlled and a calcium channel blocker might be effective in further improving lipid levels.", 
        "d. Since his lipids are only mildly out of range, lifestyle changes of limiting alcohol and sodium reduction would be sufficient to further improve the lipid control"
      ]
    },
    {
      question: "29. The following are elements of Dietary Approaches to Stop Hypertension (DASH):",
      answers: [
        "a. High protein, low carbohydrate, low sodium.", 
        "b. Low-saturated fats, limited fruits and vegetables, low calcium.", 
        "c. Low cholesterol and total fat, low fat dairy products, increased fruits and vegetables.", 
        "d. Reduced red meats, low-fat dairy products, eight or more glasses of water per day."
      ]
    },
    {
      question: "30. Which of the following statements is true about palliative care?",
      answers: [
        "a. To be eligible, the patient must have a life expectancy of 6 months or less.", 
        "b. Goals are to prevent and relieve suffering and support quality of life.", 
        "c. It cannot be provided concurrently with life-prolonging treament.", 
        "d. During a hospitalization, palliative care will be discontinued."
      ]
    },
    {
      question: "31. James, age 65, has late-stage lung cancer. Although he is currently receiving chemotherapy, his health care team is preparing to talk to James and his wife about end-of-life care options. What should they anticipate in preparing for the discussion?",
      answers: [
        "a. James and his wife are aware of hospice and palliative care options", 
        "b. James may be worried that he will become a burden on his wife and family to provide all his care.", 
        "c. Because James has Medicare, he will be aware of the ospice benefit coverage.", 
        "d. James and his wife are confident his care needs will be better met through hospice or palliative care."
      ]
    },
    {
      question: "32. A patient is brought into the clinic by family members and collapses into a chair in the lobby. The family indicates it is possible the patient may have taken an unknown number of prescription opioids. Acute symptoms of opioid overdose include:",
      answers: [
        "a. Enlarged pupils, hyper-irritability.", 
        "b. Small pupils, slurred speech, easily aroused.", 
        "c. Petit mal seizures.", 
        "d. Small pupils, unable to arouse, slow or stopped breathing."
      ]
    },
    {
      question: "33. Which of the following statements is true about depression in a patient with a terminal illness?",
      answers: [
        "a. Previous history of depression is unrelated to depression experienced with terminal illness.", 
        "b. Patients experiencing depression with terminal illness often gain weight due to inactivity.", 
        "c. Treatment of depression should focus on non-pharmacologic interventions because of the dangers of antidepressant medications in patients with failing body systems.", 
        "d. Antidepressant medications may be helpful to improve pain control."
      ]
    },
    {
      question: "34. IN preparing the family for a patient's imminent death, which of the following should be included in education?",
      answers: [
        "a. The signs and symptoms of dying that will occur first are weakness, fatigue, and decreased oral intake.", 
        "b. The family may fear giving a dose of pain medication may hasten death.", 
        "c. The dying process is a natural slowing down of body processes that occurs over 2 days.", 
        "d. Increased energy or restlessness may signal an improvement in the body's response to illness."
      ]
    },
    {
      question: "35. Untreated hypertension may lead to target organ damage in which of the following?",
      answers: [
        "a. Eyes", 
        "b. Lungs", 
        "c. Liver", 
        "d. Peripheral nerves"
      ]
    },
    {
      question: "36. During nursing assessment, patients with chronic systolic heart failure should be questioned about the use of which of the following medicaitons that can lead to decompensation?",
      answers: [
        "a. Calcium channel blockers, alpha blockers, and beta-adrenergic blockers", 
        "b. Digoxin, amiodarone, and allopurinol", 
        "c. Aspirin, warfarin, and antihistamines", 
        "d. Decongestants, antacids, and nonsteroidal anti-inflammatory agents"
      ]
    },
    {
      question: "37. Which of the following statements describes a person who is moderately sedated?",
      answers: [
        "a. May require assistance to maintain patent airway.", 
        "b. Has temporary interruption of nerve impulse transmission to a specific area of the body.", 
        "c. Has temporarily lost protective reflexes.", 
        "d. Responds purposefully to verbal commands."
      ]
    },
    {
      question: "38. Which of the following is true about preoperative informed consent?",
      answers: [
        "a. A registered nurse (RN should obtain consent, assuring that the patient understands the risks and benefits of the procedure, alternaties, and consequences of foregoing the procedures.", 
        "b. If the patient is mentally incompetent, he or she cannot legally consent to the procedure.", 
        "c. Staff members who sign as witnesses are attesting the patient is competent and understands the content of the consent form.", 
        "d. Consent is needed for procedures having general anesthesia, but not necessary for moderate or deep-sedation procedures."
      ]
    },
    {
      question: "39. Mr. Buck is a 34-year-old patient who had repair of the meniscus in his left knee in the ambulatory surgery center. The procedure was arthroscopic and the patient was placed in a knee immobilizer. To discharge Mr. Buck to his home, which of the following conditions must be met?",
      answers: [
        "a. He needs to be able to crutch walk at least 100 yards.", 
        "b. His temperature needs to be less than or equal to 99F.", 
        "c. He needs to have full sensation and movement of his left leg.", 
        "d. He must have a ride home with a responsible adult."
      ]
    },
    {
      question: "40. A 50-year-old patient is instructed to collect three stool guaiac cards and mail them to the clinic for testing for microscopic blood. Which of the following should be part of the patient's instructions for the test?",
      answers: [
        "a. The guaiac test is routinely used for cancer screening.", 
        "b. Do not collect a specimen if having loose stool or diarrhea.", 
        "c. Avoid orange juice and high doses of vitamin C.", 
        "d. Avoid taking aspirin and NSAIDS as they can lead to a false negative result."
      ]
    },
    {
      question: "41. Mrs. Stevens, a 75-year-old woman with metastatic breast cancer states, 'I have so much pain today, I can hardly function. My pain pills jsut aren't working.' Her sister is with her for her visit today. TO assess Mrs. Stevens' pain, the nurse should:",
      answers: [
        "a. Ask her sister to step out of the exam room and ask her more about Mrs. Stevens' pain.", 
        "b. Discuss the pain management plan with Mrs. Stevens.", 
        "c. Give short-acting morphine because she is having pain today.", 
        "d. Have MRs. Stevens rate the intensity of her pain on a numerical scale and describe the characteristics."
      ]
    },
    {
      question: "42. The triage nurse receives a call from Mr. Jacobs, a 36-year-old with severe lower back pain. Which of the following indicates he needs to be seen by a provider urgently?",
      answers: [
        "a. He is out of work on worker's compensation.", 
        "b. He has pain at rest and with movement.", 
        "c. He also has a headache.", 
        "d. He is having trouble with his balance."
      ]
    },
    {
      question: "43. Desired goals of moderate sedation include which of the following?",
      answers: [
        "a. Relaxation and loss of reflex response", 
        "b. Respiratory depression and relief of moderate pain", 
        "c. Minimal variation of vital signs and amnesia and/or analgesia", 
        "d. Alternation of mood and minor hypotension"
      ]
    },
    {
      question: "44. Mr. Barnett, 80 years old, calls the office, stating he is depressed and does not feel like living anymore since his wife died a few months ago. The best response from the telehealth nurse would be:",
      answers: [
        "a. 'Perhaps you should come in and see Dr. Green for an appointment later today.'", 
        "b. 'Mr. Barnett, do you have family living nearby?'", 
        "c. 'Mr. Barnett, have you been thinking of killing yourself?'", 
        "d. 'Have you had trouble sleeping since your wife passed away?'"
      ]
    },
    {
      question: "45. A 22-year-old female patient has asked the nurse about starting to take St. John's Wort for depression. After ruling out suicidal ideation, which of the following would be the best advice to offer?",
      answers: [
        "a. St. John's WOrt has not been shown to be effective in treating depression.", 
        "b. If one takes St. John's Wort, he or she needs to avoid foods containing high levels of tyramine, sucha s wine, cheese, and pickles.", 
        "c. For a patient this age, it is most likely premenstrual dysphoric disorder (PMDD) and she should get relief from OTC products.", 
        "d. She needs to speak with her primary care provider about all her medications, since St. John's Wort may interact with other medications such as antidepressants and oral contraceptives."
      ]
    },
    {
      question: "46. A nurse in ambulatory care should do a physical assessment of a patient's chest in the following order:",
      answers: [
        "a. Auscultation, inspection, use of accessory muscles, and peripheral perfusion.", 
        "b. Respiratory rate, auscultation, percussion, and forced expiratory volume.", 
        "c. INspection, palpation, percussion, and auscultation.", 
        "d. Respiratory rate, oxygen saturation by pulse oximetry, inspection, and auscultation."
      ]
    },
    {
      question: "47. Mrs. Huff, age 27, came to clinic today to see Dr. Williams with a complaint of a sprained shoulder. She has had aseveral cliinic visits over the past year for injuries. The nurse notices a bruise on Mrs. Huff's cheek and then notes another on her forearm while taking vital sings. Mrs. Huff says she hurt her shoulder carrying a laundry basket. Mrs. Huff's husband accompanied her today for her clinic appointment. Suspecting domestic violence, the nurse should:",
      answers: [
        "a. Contact the police to get a statement from Mrs. Huff.", 
        "b. Make a referral to a social worker to help Mrs. Huff find resources she may need.", 
        "c. Ensure Mrs. Huff is examined and interviewed in private.", 
        "d. Discuss her concerns and suspicions with Mr. and Mrs. Huff, and offer to help them find resources to improve their relationship."
      ]
    },
    {
      question: "48. Autism spectrum disorder is usually not diagnosed until after age 4. As a nurse in the pediatric primary care office, you know that autism is characterized by:",
      answers: [
        "a. High-pitched crying.", 
        "b. A 4-year-old unable to write letters and numbers.", 
        "c. A 4-year-old wanting to play with other children and pretend play.", 
        "d. Exhibiting repetitive movements and discomfort with changes in routine."
      ]
    },
    {
      question: "49. Which of the following developmental milestones should the nurse expect to see in a 12-month old child?",
      answers: [
        "a. Walks up steps and says six words.", 
        "b. Balances on one foot and towers four blocks.", 
        "c. THrows a ball overhand and drinks from a cup.", 
        "d. Waves bye-bye and stands alone."
      ]
    },
    {
      question: "50. Which of the following would be found in an adult patient diagnosed with obesity?",
      answers: [
        "a. A waist-to-hip ratio greater than 2.0 (abdominal girth/hip circcumference)", 
        "b. A body mass index greater than or equal to 30", 
        "c. A weight greater than 50th percentile of aduls with the same height according to standard life insurance tables", 
        "d. Body weight greater than 100% of ideal body weight"
      ]
    },
    {
      question: "51. How many doses of measles, mumps, and rubella combined vaccine (MMR) should children receive before age 7 years?",
      answers: [
        "a. 2", 
        "b. 3", 
        "c. 4", 
        "d. 5"
      ]
    },
    {
      question: "52. Which of the following would indicate the need for an emergent evaluation of a child with vomiting and diarrhea?",
      answers: [
        "a. Fever of 100.6F in a 4-year-old", 
        "b. Watery stools for 24 hours in a 2-year-old", 
        "c. Recent travel outside the United States", 
        "d. No urine output for 8 hours"
      ]
    },
    {
      question: "53. Which of the following would be commonly reccommended for treatment of mild upper-respiratory infection in a child under 6 years old?",
      answers: [
        "a. Initiate a course of broad-spectrum antibiotics.", 
        "b. Administer over-the-counter cough and cold medications.", 
        "c. Call or make appointment for cough lasting more than 3 days.", 
        "d. Administer acetaminophen or ibuprofen for fever or pain."
      ]
    },
    {
      question: "54. In a person with human immunodeficiency virus (HIV) the progression to acquired immune deficiency syndrom (AIDS) is defined by which of the following:",
      answers: [
        "a. Positive enzyme-linked immunosorbent assay (ELISA) and a confirmatory Western Blot.", 
        "b. Nadir CD4+ T cell count and diagnosis of opportunistic condition.", 
        "c. Acute mononucleosis-like symptoms such as fever, malaise, fatigue, body aches, headache, and sore throat.", 
        "d. Continued high-risk sexual behaviors such as condom-less sex with a known HIV+ partner, exchanging sex for drugs, or sex with multiple partners."
      ]
    },
    {
      question: "55. WHich of the following statements by the nurse demonstrates accurate understanding of influenza vaccinations?",
      answers: [
        "a. Live attenuated influenza vaccine (LAIV) administered intranasally is an option for all children.", 
        "b. First-time vaccines in children 6 months through 8 years should include two doses, 4 weeks apart.", 
        "c. A child with asthma should not receive an influenza vaccination", 
        "d. A pregnant woman would be able to receive intranasal LAIV."
      ]
    },
    {
      question: "56. A nurse performing telephone triage determines the nature and urgency of the patient's problem using clinical reasoning, tapping their knowledge and experience. This is an example of which component of the telehealth nursing process?",
      answers: [
        "a. Assessment", 
        "b. Diagnosis", 
        "c. Intervention", 
        "d. Outcomes"
      ]
    },
    {
      question: "57. Which of the following is an example of wellness bias, a clinical peril in telehealth nursing practice?",
      answers: [
        "a. THe nurse only gathers assessment information from a spouse who calls to report her husband's symptoms.", 
        "b. A nurse uses decision support tools to improve safety and guide the nursing process in telephone triage in addition to clinical judgment.", 
        "c. THe nurse defers a full assessment after a patient calls with self-diagnosis of indigestion because she thinks this is most probable.", 
        "d. A nurse gathers further positive and negative assessment data from a patient who calls with a self-diagnosis of a migraine headache."
      ]
    },
    {
      question: "58. Nurses in a surgical clinic are concerned that patients are not following presurgical instructions. There has been a trend of patients eating and drinking too close to the time of their surgical procedure resulting in cancellation. Which of the following describes an evidence-based approach the nurses can explore to improve patient understanding?",
      answers: [
        "a. Identify patients who followed instructions and interview them to determine success factors.", 
        "b. Review and evaluate research articles about preoperative teaching.", 
        "c. Implement a process to call the patients after preoperative instruction is given to determine their understanding.", 
        "d. Evaluate preoperative teaching materials for language level and revise materials for readability at the 5th grade level."
      ]
    },
    {
      question: "59. Which of the following is an example of secondary prevention?",
      answers: [
        "a. Screening colonoscopy at age 45", 
        "b. Human papilomavirus (HPV) vaccination in an 11-year-old", 
        "c. Wearing a seatbelt", 
        "d. Nutritional counseling for patient with diabetes melitus"
      ]
    },
    {
      question: "60. All of the following are examples of tertiary prevention EXCEPT: ",
      answers: [
        "a. Utilizing the teach-back method by having a patient with diabetes melitus explain the management of a hypoglyceminc event.", 
        "b. Instructing a patient with chronic heart failure to perform home weight monitoring.", 
        "c. Reviewing the cancer screening recommendations at a 50-year-old patient's wllness visit.", 
        "d. Evaluating caregiver understanding of swallowing precautions after their spouse had a stroke with existing dysphagia."
      ]
    },
    {
      question: "61. Which of the following would NOT demonstrate best practice for assessment of depression for a teenager during a wellness visit?",
      answers: [
        "a. Utilizing the evidence-based depression screening questionaires.", 
        "b. Inquiring if a teen with depression has had any thoughts of suicide or suicide attempts.", 
        "c. Assessing for common symptoms of depression such as withdrawal from usual social activities.", 
        "d. Conducting the complete assessment with parents present."
      ]
    },
    {
      question: "62. Which of the following statements by the patient indicates understanding of instructions for management of hypoglycemic episodes?",
      answers: [
        "a. \"If I pass out, my wife can put something with sugar in my mouth\"", 
        "b. \"I only need to monitor my blood glucose if I have symptoms.\"", 
        "c. \"If my blood glucose is less than 70 mg/dL, I should have 4 ounces of juice and repeat the reading in 15 minutes.\"", 
        "d. \"I won't have a hypoglycemic event if I have type 2 diabetes; that happens with type 1.\""
      ]
    },
    {
      question: "63.The goal of the nurse caring for a patient having surgery or procedure is to: ",
      answers: [
        "a. Clearly recognize different levels of sedation.", 
        "b. Maintain safety and physiologic integrity of the patient.", 
        "Provide family members with emotional support.", 
        "d. Coordinate the care team during procedures."
      ]
    },
    {
      question: "64. Which of the following is an important consideration when determining if a surgical procedure should be performed in an inpatient or abulatory setting?",
      answers: [
        "a. Presence of chronic conditions", 
        "b. Procedural requirement for moderate sedation", 
        "c. Urgency of procedure", 
        "d. Postoperative care requirements"
      ]
    },
    {
      question: "65. The primary reason for a gastointestinal(GI) preep is used the day before an abdominal procedure is to: ",
      answers: [
        "a. Improve visualization of upper GI tract.", 
        "b. Minimize patient discomfort.", 
        "c. Imrpove visualization of the lower GI tract.", 
        "d. Minimize time of procedure."
      ]
    },
    {
      question: "66. During a preoperative nursing asssessment, which finding might result in the cancellation of a scheduled procedure?",
      answers: [
        "a. Fever", 
        "b. Weight loss", 
        "c. Recent diarrhea", 
        "d. Elevated blood glucose"
      ]
    },
    {
      question: "67.Sources of authoritative statements and standards for provision of moderate sedation in the ambulatory setting include: ",
      answers: [
        "a. American Academy of Ambulatory Care Nursing.", 
        "b. American Nurses Association.", 
        "c. State Board of Nursing.", 
        "d. The Department of Health and Human Services."
      ]
    },
    {
      question: "68. Which of the following measures might be included in the patient's postoperative instructions to aid in the prevention of respiratory complications?",
      answers: [
        "a. Use of vascular compression devices", 
        "b. Use of incentive spirometer", 
        "c. Over-the-counter multivitamin", 
        "d. Use of patient-controlled analgesia pump"
      ]
    },
    {
      question: "69. The postoperative period begins when the patient enters the Post Anesthesia Care Unit(PACU) and ends: ",
      answers: [
        "a. At discharge.", 
        "b. Upon arrival home.", 
        "c. When healing is complete.", 
        "d. When released by primary provider."
      ]
    },
    {
      question: "70. Prior to the administration of palliative sedation, the following guidelines should be established except: ",
      answers: [
        "a. Death should be imminent and expected within days or hours.", 
        "b. Patient or caregiver should be educated on the expectations and goals of sedation.", 
        "c. A do-not-resucitate order must be in place; however, hydration and other life prolonging therapies may continue.", 
        "d. There is confirmation the patient is gravely suffering."
      ]
    },
    {
      question: "71. Which of the following pharmacologic options may be helpful in addressing anorexia in terminally ill adults?",
      answers: [
        "a. Corticosteroids, cannabinoids, and progestational agents", 
        "b. Benzodiazepines, opiods, and metoclopromide", 
        "c. Benzphetamine, phetermine, and cannabinoids", 
        "d. Corticosteroids, pegfilgratism, and cannabinoids"
      ]
    },
    {
      question: "72. Mr. Peterson is a 74-year-old patient with stage IV lung cancer that has metastasized to the bone. In assessing Mr. Peterson, the nurse should be aware of possible barriers to adequate pain manangement which include: ",
      answers: [
        "a. Resignation the he has terminal cancer and that nothing helps and nothing can be done.", 
        "b. His health care team is open to homeopathic remedies.", 
        "c. Mr. Peterson's refusal to accept that complete pain relief is unrealistic considering his prognosis.", 
        "d. His use of prayer to help him forget about his pain."
      ]
    },
    {
      question: "73. Mr. Peterson starts to question the meaning of his life and the contribution to society he has made. The nurse recongizes there needs to be further investigation and discussion of his feelings. This sense of helplessness, hopelessness, meaninglessness, regret, and fear in patients at the end of life may be an indication of: ",
      answers: [
        "a. Anxiety and agitation.", 
        "b. Emotional incapacitation.", 
        "c. Spiritual distress.", 
        "d. Existential distress."
      ]
    },
    {
      question: "74. A terminally ill patient may experience nociceptive pain which is described as: ",
      answers: [
        "a. A sensation of burning,tingling, or radiating electrical currents.", 
        "b. Throbbing, aching, spastic, and cramping.", 
        "c. Usually chronic and less responsive to opioid drugs.", 
        "d. Perceived pain."
      ]
    },
    {
      question: "75. The following are benefits of early palliative care refferals EXECPT: ",
      answers: [
        "a. It allows time to establish and repair relationships between patient and family.", 
        "b. It facilitates immediate discussions about the processes of death and dying.", 
        "c. Patients reffered early to palliative care have fewer emergency visits and hospitalizations.", 
        "d. Early palliative care has been shown to increase patient and caregiver satisfaction."
      ]
    },
    {
      question: "76. CRIES is a validated and acceptable tool for assessing pain in patients less than 3 years of age. CRIES stands for: ",
      answers: [
        "a. Crying, Restless, Irritable, Emotional, Sad.", 
        "b. Crying, Requires oxygen for saturation below 95%, Increased vital signs, Expression, and Sleeplessness.", 
        "c. Crying, Restless, Inconsolable, Eating less, Somber.", 
        "d. Crying, Respiratory rate, Inconsolable, Emotional, Sleepy."
      ]
    },
    {
      question: "77. The nurse can help terminally ill patients who may become despondent and withdrawn by: ",
      answers: [
        "a. Suggesting options for the family to assist with distraction.", 
        "b. Providing information about how other patients have coped with terminal illness.", 
        "c. Reccomending a reduction in pain medication to increase engagement with family.", 
        "d. Encouraging grief counseling consistent with patient wishes."
      ]
    },
    {
      question: "78. Mrs. James, a 43-year-old patient in the clinic, was recently diagnosed with rheumatoid arthritis. Her current symptoms include fatigue, mild pain, and stiffness in her fingers, especially in the morning. Her treatment goals include which of the following?",
      answers: [
        "a. Remission, avoiding joint and organ damage, and avoiding disability.", 
        "b. Preparation for joint replacement surgery which will likely be required in the next year.", 
        "c. Annual medical visits since her symptoms are mild", 
        "d. Medication adherence, reducing physical activity, and annual medical visits"
      ]
    },
    {
      question: "79. Rheumatoid arthritis is more commonly seen in: ",
      answers: [
        "a. Elderly, thin, caucasian women.", 
        "b. Middle-aged women.", 
        "c. Middle-aged caucasian men.", 
        "d. Asian women usually over the age of 55."
      ]
    },
    {
      question: "80. Which of the following are appropriate treatments for patients with dementia?",
      answers: [
        "a. Exercise, music, cognitive, and behavioral therapies", 
        "b. Home evaluation to assess for safety of appliances and presence of smoke detectors", 
        "c. Refferal to caregiver support resources", 
        "d. Use of alternative therapies such as herbal remedies shown to be effective with dementia"
      ]
    },
    {
      question: "81. Dementia care strategies that include providing warm, soft textures; using smooth, slow movements; and remaining in the patient's central field of vision are especially important in what stage of dementia?",
      answers: [
        "a. Mild", 
        "b. Moderate", 
        "c. Late", 
        "d. End-stage"
      ]
    },
    {
      question: "82. Which of the following elements is NOT a core dimension of the RN Care Coordination and Transition Management (CCTM) role?",
      answers: [
        "a. Advocacy", 
        "b. Spritual care", 
        "c. Population health management", 
        "d. Patient-centered care planning"
      ]
    },
    {
      question: "83. Mrs. Smith is being dismissed from the hospital setting. She continues to struggle with management of COPD and has no family living nearby. which of the following would NOT be considered typical transitional services?",
      answers: [
        "a. The nurse plans to work with Mrs. Smith over the next year to help her better manage her condition.", 
        "b. The nurse reaches out to Mrs. Smith while in the hospital to let her know of transitional care services.", 
        "c. The nurse coaches Mrs. Smith in how to more effectively self-manage.", 
        "d. The nurse helps the patient identify community resources that may be beneficial in her care."
      ]
    },
    {
      question: "84. John, an RN CCTM in a primare care practice, is working with Tara, a 5-year-old patient with severe asthma. John is frustrated because Tara has missed her last two appointments. John is concerned about Tara's well-being. What is the BEST response John should make in this situation?",
      answers: [
        "a. John does nothing and follow's his clinic's policy that after two \"no-shows\" no further appointments are made until the patient reaches out.", 
        "b. John reviews the electronic health record (EHR) to make sure Tara's family was aware of the appointments.", 
        "c. John reviews the EHR and notes that Tara's primary caregiver works day shift at the local nursing home.", 
        "d. John uses multiple ways to reach out such as portal and phone to check on Tara's status and identify appointment barriers."
      ]
    },
    {
      question: "85. Maria is an RN CCTM providing transition services utilizing the Care Transitions Intervention (CTI) model. Which of the following actions by Maria would be most consistent with appplication of CTI model?",
      answers: [
        "a. Offers to set up medications to ensure adherence to the plan.", 
        "b. Sends a portal message to a patient to set up a clinic appointment.", 
        "c. Sets up home health services if needed for the patient.", 
        "d. Works with the patient to develop a plan of action if symptoms worsen."
      ]
    },
    {
      question: "86. Which of the following describes effective outcome statements applying SMART criteria?",
      answers: [
        "a. Specific, Medical, Appropriate, Relevant, Tangible", 
        "b. Short-term, Measurable, Appropriate, Relevant, Tangible", 
        "c. Specific, Measurable, Attainble, Realistic, Time bound", 
        "d. Selective, Medical, Achievable, Responsive, Thorough"
      ]
    },
    {
      question: "87. What document(s) primarily defines the regulatory standards of telehealth nursing practices?",
      answers: [
        "a. The American Nurses Association's (ANA's) general nursing practice standards", 
        "b. Scope and Standards of Practice for Proffesional Telehealth Nursing", 
        "c. State nurse practice acts", 
        "d. Regulatory agency standards, including the Joint Commision, ADA, and OSHA"
      ]
    },
    {
      question: "88. Which of the following point of care tests is NOT routinely performed in ambulatory care settings?",
      answers: [
        "a. Glucose", 
        "b. Rapid Antigen Detection Strep Test (RADT)", 
        "c. International Normalized Ratio (INR)", 
        "d. Chemistry panel"
      ]
    },
    {
      question: "89. Which of the following actions would demonstrate application of USPSTF recommendations for lead screening?",
      answers: [
        "a. The RN ensures elevated lead levels are reported to the state health department.", 
        "b. Adult patients complaining of generalized malaise should be screened for blood lead levels.", 
        "c. The RN would do a comprehensive assessment of home environment at all well-child exams.", 
        "d. High-risk children aged 5-9 should be screened for lead levels."
      ]
    },
    {
      question: "90. The wife of a 60-year-old patient who has a diagnosis of chronic kidney disease contacts the nephrology practice for advice about her husband's care, which of the following would prompt the nurse to recommend urgent care?",
      answers: [
        "a. \"My husband has been urinating 10-12 times a day the past few days.\"", 
        "b. \"After the last doctor visit, I noticed that my husband's serum calciam and phosphate are elevated.\"", 
        "c. \"My husband seems confused\"", 
        "d. \"Today when I helped my husband check his glucose, I noticed that it was 139 mg/dl.\""
      ]
    },
  ];
  
  const answerKey = [
  "b", "c", "c", "d", "a", "b","c","a","b","d","d","b","c","a","a","d","a","a","d","a","b","b","a","b","c","c","b","b","c",
  "b","b","d","d","b","a","d","d","b","d","c","d","d","c","c","d","c","c","d","d","b","a","d","d","b","b","b","c","b","a","c",
  "d","c","b","d","c","a","b","b","c","c","a","a","d","b","b","b","d","a","b","a","d","b","a","d","d","c","c","d","a","c"
];
  
  const totalQuestions = questions.length;
  var correctAnswers = 0;
  var answeredQuestions = 0;
  var questionIndex = 0;
  var question = document.getElementById("insert");
  var userAnswer = document.getElementById("choices");
  const choiceButtons = document.querySelectorAll(".choice");
  const questionText = document.querySelectorAll(".description");
  const questionContainer = document.getElementById("containerQuestion");
  const submitButton = document.getElementById("submit");
  const continueButton = document.getElementById("continue");
  
  continueButton.addEventListener("click", () => {
    nextQuestion();
  });
  
  function handleChoiceClick(event) {
    const selectedButton = event.target;
  
    choiceButtons.forEach(button => {
      button.classList.remove("selected");
    });
  
    selectedButton.classList.add("selected");
  }
  
  choiceButtons.forEach(button => {
    button.addEventListener("click", handleChoiceClick);
  });
  
  function displayQuestionAndAnswers() {
    const currentQuestion = questions[questionIndex];
    const questionNumberElement = document.getElementById("questionNumber");
    questionNumberElement.textContent = `Question ${questionIndex + 1} out of ${totalQuestions}`;
  
    question.textContent = currentQuestion.question;
  
    questionText.forEach((textElement, index) => {
      const answerText = currentQuestion.answers[index].substring(2); // Remove the prefix
      textElement.textContent = answerText;
    });
  
    submitButton.addEventListener("click", () => {
      checkAnswer();
    });
  }
  
  
  displayQuestionAndAnswers();
  
  function nextQuestion() {
    const resultContainer = document.getElementById("result");

    questionIndex++;
  
    if (questionIndex >= questions.length) {
      questionIndex = 0;
      const percentage = (correctAnswers / answeredQuestions) * 100; // Calculate the percentage
      const percentageDisplay = document.getElementById("percentage");
      percentageDisplay.textContent = `You got ${percentage.toFixed(2)}% of the questions correct.`;
      correctAnswers = 0; // Reset the correctAnswers count for the next round
      answeredQuestions = 0; // Reset the answeredQuestions count for the next round
    }
    displayQuestionAndAnswers();
  }
  
    function checkAnswer() {
      const selectedAnswer = document.querySelector(".choice.selected");
      const resultContainer = document.getElementById("result");
    
      if (selectedAnswer) {
        const selectedAnswerText = selectedAnswer.textContent.trim();
        const selectedAnswerOption = selectedAnswerText.charAt(0);
        const correctAnswerOption = answerKey[questionIndex];
    
        if (selectedAnswerOption === correctAnswerOption) {
          resultContainer.textContent = "Yay! You were correct!";
          correctAnswers++; // Increment the correctAnswers count
        } else {
          resultContainer.textContent = `Aww, the right answer was "${correctAnswerOption}".`;
        }
        answeredQuestions++; // Increment the answeredQuestions count
      } else {
        resultContainer.textContent = "Please select an answer.";
      }
    
  
    resultContainer.removeAttribute("hidden");
    setTimeout(function() {
      resultContainer.setAttribute("hidden", "true");
    }, 1000);
  }
  