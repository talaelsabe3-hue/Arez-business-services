const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const languageToggle = document.querySelector('.language-toggle');

const translations = {
  'Arez Businessmen Services | UAE Business Consultancy': 'أرز لخدمات رجال الأعمال | استشارات وخدمات أعمال في الإمارات',
  'About Us | Arez Businessmen Services': 'من نحن | أرز لخدمات رجال الأعمال',
  'Services | Arez Businessmen Services': 'الخدمات | أرز لخدمات رجال الأعمال',
  'Contact | Arez Businessmen Services': 'تواصل معنا | أرز لخدمات رجال الأعمال',
  'Home': 'الرئيسية',
  'About': 'من نحن',
  'Services': 'الخدمات',
  'Contact': 'تواصل معنا',
  'Call Now': 'اتصل الآن',
  'WhatsApp': 'واتساب',
  'UAE Business Consultancy': 'استشارات وخدمات أعمال في الإمارات',
  'Start, structure, and grow your business in the UAE with confidence.': 'ابدأ ونظم ونم أعمالك في الإمارات بثقة.',
  'Arez Businessmen Services supports founders, investors, residents, and companies with practical guidance across setup, typing services, visas, Emirates ID, government transactions, tax, and insurance.': 'تدعم أرز لخدمات رجال الأعمال المؤسسين والمستثمرين والمقيمين والشركات من خلال خدمات تأسيس الأعمال والطباعة والتأشيرات والهوية الإماراتية والمعاملات الحكومية والضرائب والتأمين.',
  'Get Started': 'ابدأ الآن',
  'Contact Us': 'تواصل معنا',
  'services': 'خدمة',
  'focused': 'تركيز إماراتي',
  'support': 'دعم مباشر',
  'About Arez Businessmen Services': 'عن أرز لخدمات رجال الأعمال',
  'A refined consultancy partner for decisive business moves.': 'شريك استشاري موثوق لخطوات أعمال واضحة وحاسمة.',
  'We help clients navigate essential UAE business requirements with clarity, discretion, and dependable follow-through. Our work is built around practical advice, well-organized documentation, and responsive communication.': 'نساعد العملاء على إنجاز متطلبات الأعمال الأساسية في الإمارات بوضوح واحترافية ومتابعة موثوقة. يقوم عملنا على النصائح العملية وتنظيم المستندات والتواصل السريع.',
  'Learn more about us': 'اعرف المزيد عنا',
  'Business, typing, marketing, website, and government services under one roof.': 'خدمات الأعمال والطباعة والتسويق والمواقع والمعاملات الحكومية في مكان واحد.',
  'Business Setup': 'تأسيس الأعمال',
  'Company formation guidance for entrepreneurs and businesses planning to establish a UAE presence.': 'إرشاد لتأسيس الشركات لرواد الأعمال والشركات الراغبة في بدء نشاطها داخل الإمارات.',
  'Support for clients establishing a business presence in the UAE, with attention to documentation, process flow, and practical next steps.': 'دعم للعملاء الراغبين في تأسيس وجود تجاري في الإمارات مع الاهتمام بالمستندات وتسلسل الإجراءات والخطوات العملية التالية.',
  'We help you understand the right setup path, documents, and next steps.': 'نساعدك على فهم مسار التأسيس المناسب والمستندات والخطوات التالية.',
  'Request Service': 'اطلب الخدمة',
  'Typing Services': 'خدمات الطباعة',
  'Professional typing and preparation support for applications, official letters, forms, and documents.': 'خدمات طباعة وإعداد احترافية للطلبات والخطابات الرسمية والنماذج والمستندات.',
  'Send us your requirement and we will guide you on the needed information.': 'ارسل لنا طلبك وسنرشدك إلى المعلومات المطلوبة.',
  'Visa & Entry Permits': 'التأشيرات وتصاريح الدخول',
  'Assistance with visa applications, entry permits, and related documentation for UAE procedures.': 'مساعدة في طلبات التأشيرات وتصاريح الدخول والمستندات المرتبطة بإجراءات الإمارات.',
  'Get support for applications, renewals, and document preparation.': 'احصل على دعم للطلبات والتجديدات وتجهيز المستندات.',
  'Residency & Emirates ID': 'الإقامة والهوية الإماراتية',
  'Support for residency services, Emirates ID procedures, renewals, and required application steps.': 'دعم لخدمات الإقامة وإجراءات الهوية الإماراتية والتجديدات وخطوات الطلب المطلوبة.',
  'We assist with residency and Emirates ID steps from documents to follow-up.': 'نساعدك في خطوات الإقامة والهوية الإماراتية من المستندات حتى المتابعة.',
  'License Renewal': 'تجديد الرخص',
  'Company license renewal and document coordination for mainland and free zone requirements.': 'تجديد رخص الشركات وتنسيق المستندات لمتطلبات البر الرئيسي والمناطق الحرة.',
  'Keep your company active with organized renewal support and document checks.': 'حافظ على نشاط شركتك من خلال دعم منظم للتجديد وفحص المستندات.',
  'Government Transactions': 'المعاملات الحكومية',
  'Processing support for government applications, follow-ups, submissions, and service requests.': 'دعم في إنجاز الطلبات الحكومية والمتابعة والتقديم وطلبات الخدمات.',
  'We help with submissions, service requests, and transaction follow-up.': 'نساعد في التقديم وطلبات الخدمات ومتابعة المعاملات.',
  'Bank Account Opening': 'فتح الحسابات البنكية',
  'Guidance and document preparation support for business and individual bank account applications.': 'إرشاد وتجهيز مستندات لطلبات فتح الحسابات البنكية للشركات والأفراد.',
  'Prepare your application with clearer document guidance and coordination.': 'جهز طلبك مع إرشاد أوضح للمستندات وتنسيق مناسب.',
  'Tenancy Contract Support': 'خدمات عقود الإيجار',
  'Assistance with tenancy contract attestation and related property document procedures.': 'مساعدة في تصديق عقود الإيجار والإجراءات المرتبطة بمستندات العقارات.',
  'Get help with tenancy contract attestation and related property paperwork.': 'احصل على مساعدة في تصديق عقود الإيجار ومستندات العقارات المرتبطة.',
  'Marketing Services': 'خدمات التسويق',
  'Practical marketing support to help businesses promote their services and reach the right audience.': 'دعم تسويقي عملي لمساعدة الشركات على ترويج خدماتها والوصول إلى الجمهور المناسب.',
  'Get help with service promotion, campaign planning, and clearer business messaging.': 'احصل على مساعدة في ترويج الخدمات وتخطيط الحملات وصياغة رسائل أعمال أوضح.',
  'Social Media & Websites': 'وسائل التواصل والمواقع',
  'Support for creating social media accounts, business profiles, website setup, and online presence.': 'دعم لإنشاء حسابات التواصل الاجتماعي والملفات التجارية وإعداد المواقع والحضور الرقمي.',
  'Start new social media accounts, business pages, and websites with organized setup support.': 'ابدأ حسابات تواصل اجتماعي وصفحات أعمال ومواقع جديدة بدعم منظم للإعداد.',
  'Why Choose Us': 'لماذا تختارنا',
  'Premium service, practical clarity, and a UAE-first perspective.': 'خدمة راقية ووضوح عملي وخبرة مركزة في الإمارات.',
  'We combine local business understanding with organized, client-centered support, helping you make the right decisions without unnecessary complexity.': 'نمزج بين فهم السوق المحلي والدعم المنظم المتمحور حول العميل لمساعدتك على اتخاذ القرارات الصحيحة دون تعقيد غير ضروري.',
  'Responsive communication': 'تواصل سريع',
  'Direct support through phone, email, and WhatsApp.': 'دعم مباشر عبر الهاتف والبريد الإلكتروني وواتساب.',
  'Trusted process': 'إجراءات موثوقة',
  'Structured steps from first inquiry to completed service.': 'خطوات منظمة من أول استفسار حتى اكتمال الخدمة.',
  'Professional discretion': 'احترافية وخصوصية',
  'A polished experience for founders, SMEs, and investors.': 'تجربة راقية للمؤسسين والشركات الصغيرة والمتوسطة والمستثمرين.',
  'UAE Business Support': 'دعم الأعمال في الإمارات',
  'Business setup, typing services, and government transaction support across the UAE.': 'تأسيس الأعمال وخدمات الطباعة وتخليص المعاملات الحكومية في جميع أنحاء الإمارات.',
  'Arez Businessmen Services helps clients across the United Arab Emirates with business setup, company formation, license renewal, typing services, visa applications, Emirates ID procedures, residency support, corporate tax guidance, insurance services, marketing services, social media account setup, website services, bank account opening support, tenancy contract attestation, and government transaction processing.': 'تساعد أرز لخدمات رجال الأعمال العملاء في جميع أنحاء الإمارات من خلال تأسيس الأعمال وتأسيس الشركات وتجديد الرخص وخدمات الطباعة وطلبات التأشيرات وإجراءات الهوية الإماراتية ودعم الإقامة وإرشاد ضريبة الشركات وخدمات التأمين وخدمات التسويق وإنشاء حسابات التواصل الاجتماعي وخدمات المواقع ودعم فتح الحسابات البنكية وتصديق عقود الإيجار وتخليص المعاملات الحكومية.',
  'Whether you are starting a new company, renewing documents, preparing official applications, or managing business requirements, our team gives you clear direction and dependable support for UAE procedures.': 'سواء كنت تبدأ شركة جديدة أو تجدد مستندات أو تجهز طلبات رسمية أو تدير متطلبات أعمالك، يقدم لك فريقنا توجيها واضحا ودعما موثوقا لإجراءات الإمارات.',
  'Business setup UAE': 'تأسيس الأعمال في الإمارات',
  'Typing services UAE': 'خدمات الطباعة في الإمارات',
  'Visa services UAE': 'خدمات التأشيرات في الإمارات',
  'Emirates ID support': 'دعم الهوية الإماراتية',
  'Government transactions UAE': 'المعاملات الحكومية في الإمارات',
  'Corporate tax UAE': 'ضريبة الشركات في الإمارات',
  'Insurance services UAE': 'خدمات التأمين في الإمارات',
  'Marketing services UAE': 'خدمات التسويق في الإمارات',
  'Social media setup UAE': 'إعداد وسائل التواصل في الإمارات',
  'Website services UAE': 'خدمات المواقع في الإمارات',
  'License renewal UAE': 'تجديد الرخص في الإمارات',
  'Client Reviews': 'آراء العملاء',
  'Share your experience with Arez Businessmen Services.': 'شارك تجربتك مع أرز لخدمات رجال الأعمال.',
  'Visitors can leave a review about business setup, typing services, visa support, government transactions, or any service they received.': 'يمكن للزوار ترك تقييم عن تأسيس الأعمال أو خدمات الطباعة أو دعم التأشيرات أو المعاملات الحكومية أو أي خدمة حصلوا عليها.',
  'Professional, quick, and clear from the first call. The team helped us understand the next steps without confusion.': 'خدمة احترافية وسريعة وواضحة من أول اتصال. ساعدنا الفريق على فهم الخطوات التالية دون أي ارتباك.',
  'Business Setup Client': 'عميل تأسيس أعمال',
  'Excellent support with document typing and government transaction follow-up. Very responsive on WhatsApp.': 'دعم ممتاز في طباعة المستندات ومتابعة المعاملات الحكومية. استجابة سريعة جدا عبر واتساب.',
  'Typing Services Client': 'عميل خدمات الطباعة',
  'FAQ': 'الاسئلة الشائعة',
  'Questions clients ask before getting started.': 'اسئلة يطرحها العملاء قبل البدء.',
  'Do you help with business setup in the UAE?': 'هل تساعدون في تأسيس الأعمال في الإمارات؟',
  'Yes. We support entrepreneurs and companies with business setup guidance, document preparation, and practical next steps for UAE procedures.': 'نعم. ندعم رواد الأعمال والشركات من خلال إرشاد تأسيس الأعمال وتجهيز المستندات والخطوات العملية لإجراءات الإمارات.',
  'Do you provide typing services?': 'هل تقدمون خدمات الطباعة؟',
  'Yes. We help with typing and preparing applications, official forms, letters, and supporting documents for government and business services.': 'نعم. نساعد في طباعة وتجهيز الطلبات والنماذج الرسمية والخطابات والمستندات الداعمة للخدمات الحكومية وخدمات الأعمال.',
  'Can you assist with visas and Emirates ID?': 'هل يمكنكم المساعدة في التأشيرات والهوية الإماراتية؟',
  'Yes. We provide support for visa, entry permit, residency, Emirates ID, and renewal-related document procedures.': 'نعم. نقدم الدعم لإجراءات التأشيرات وتصاريح الدخول والإقامة والهوية الإماراتية والمستندات المتعلقة بالتجديد.',
  'Can I contact you on WhatsApp?': 'هل يمكنني التواصل معكم عبر واتساب؟',
  'Yes. You can message us directly on WhatsApp at +971 50 343 1041 for quick support.': 'نعم. يمكنك مراسلتنا مباشرة عبر واتساب على \u2066+971 50 343 1041\u2069 للحصول على دعم سريع.',
  'Do you handle government transactions?': 'هل تنجزون المعاملات الحكومية؟',
  'Yes. We assist with government transaction processing, submissions, follow-ups, and related service requests.': 'نعم. نساعد في تخليص المعاملات الحكومية والتقديمات والمتابعة وطلبات الخدمات المرتبطة.',
  'Do not fill this out': 'لا تعبئ هذا الحقل',
  'Rating': 'التقييم',
  'Review': 'التقييم المكتوب',
  'Select rating': 'اختر التقييم',
  '★★★★★ Excellent': '★★★★★ ممتاز',
  '★★★★ Good': '★★★★ جيد',
  '★★★ Average': '★★★ متوسط',
  'Submit Review': 'إرسال التقييم',
  'Ready to begin?': 'جاهز للبدء؟',
  'Speak with Arez Businessmen Services today.': 'تحدث مع أرز لخدمات رجال الأعمال اليوم.',
  'Tell us what you want to build, and we will guide you toward the next practical step.': 'أخبرنا بما تريد إنجازه وسنرشدك إلى الخطوة العملية التالية.',
  'Message on WhatsApp': 'راسلنا عبر واتساب',
  'Call +971 50 343 1041': 'اتصل على \u2066+971 50 343 1041\u2069',
  'UAE-based business consultancy and typing service provider for setup, visas, Emirates ID, government transactions, tax, insurance, marketing, social media, and websites.': 'مزود خدمات استشارية وطباعة في الإمارات لتأسيس الأعمال والتأشيرات والهوية الإماراتية والمعاملات الحكومية والضرائب والتأمين والتسويق ووسائل التواصل والمواقع.',
  'Quick Links': 'روابط سريعة',
  'Google Maps': 'خرائط جوجل',
  '© 2026 Arez Businessmen Services. All rights reserved.': '© 2026 أرز لخدمات رجال الأعمال. جميع الحقوق محفوظة.',
  'About Us': 'من نحن',
  'Business support shaped around clarity, trust, and UAE opportunity.': 'دعم أعمال قائم على الوضوح والثقة وفرص الإمارات.',
  'Arez Businessmen Services works with entrepreneurs, established companies, investors, and residents who need confident support for key business and government requirements in the UAE.': 'تعمل أرز لخدمات رجال الأعمال مع رواد الأعمال والشركات والمستثمرين والمقيمين الذين يحتاجون إلى دعم موثوق لمتطلبات الأعمال والمعاملات الحكومية في الإمارات.',
  'Our Approach': 'منهجنا',
  'We make important business steps feel organized and manageable.': 'نجعل خطوات الأعمال المهمة منظمة وسهلة المتابعة.',
  'Our role is to simplify complex processes and keep clients informed at each stage. Whether you are forming a new company, renewing a license, typing official applications, arranging visas, preparing for corporate tax, or handling government transactions, we focus on practical execution and professional communication.': 'دورنا هو تبسيط الإجراءات المعقدة وإبقاء العملاء على اطلاع في كل مرحلة. سواء كنت تؤسس شركة جديدة أو تجدد رخصة أو تطبع طلبات رسمية أو تنجز تأشيرات أو تستعد لضريبة الشركات أو تتعامل مع معاملات حكومية، فإننا نركز على التنفيذ العملي والتواصل الاحترافي.',
  'Every engagement begins with understanding the client’s goal, then mapping the right service path with clear next steps.': 'تبدأ كل خدمة بفهم هدف العميل، ثم تحديد المسار المناسب بخطوات واضحة.',
  'Clarity': 'الوضوح',
  'Straightforward guidance, clear documentation, and no unnecessary complication.': 'إرشاد مباشر ومستندات واضحة دون تعقيد غير ضروري.',
  'Reliability': 'الموثوقية',
  'Consistent follow-up and organized handling from inquiry to completion.': 'متابعة مستمرة وتنظيم كامل من الاستفسار حتى الإنجاز.',
  'Professionalism': 'الاحترافية',
  'A polished, respectful client experience built for serious business decisions.': 'تجربة عميل راقية ومحترمة تناسب قرارات الأعمال المهمة.',
  'Focused UAE services for business, residency, and government procedures.': 'خدمات إماراتية متخصصة للأعمال والإقامة والإجراءات الحكومية.',
  'Choose the support you need today, or contact us for guidance on the right path for your company or personal application.': 'اختر الخدمة التي تحتاجها اليوم أو تواصل معنا لإرشادك إلى المسار المناسب لشركتك أو طلبك الشخصي.',
  'Legal Consultancy': 'الاستشارات القانونية',
  'Professional advisory and coordination support for legal business matters, documentation needs, and company-related procedures.': 'دعم استشاري وتنسيقي للمسائل القانونية التجارية ومتطلبات المستندات وإجراءات الشركات.',
  'Typing and preparation for official applications, forms, letters, government submissions, and supporting documents.': 'طباعة وإعداد للطلبات الرسمية والنماذج والخطابات والمعاملات الحكومية والمستندات الداعمة.',
  'Company Formation & License Renewal': 'تأسيس الشركات وتجديد الرخص',
  'Company formation support plus trade license renewal coordination, document checks, and application follow-up.': 'دعم تأسيس الشركات وتجديد الرخص التجارية وفحص المستندات ومتابعة الطلبات.',
  'Free Zone Business Services': 'خدمات أعمال المناطق الحرة',
  'Assistance for businesses operating in UAE free zones, including setup-related coordination and service requests.': 'مساعدة للشركات العاملة في المناطق الحرة بالإمارات، بما يشمل تنسيق التأسيس وطلبات الخدمات.',
  'Support for visa applications, entry permits, renewals, and related UAE documentation procedures.': 'دعم لطلبات التأشيرات وتصاريح الدخول والتجديدات والإجراءات المرتبطة بمستندات الإمارات.',
  'Residency & Emirates ID Services': 'خدمات الإقامة والهوية الإماراتية',
  'Assistance with residency procedures, Emirates ID applications, renewals, and required document preparation.': 'مساعدة في إجراءات الإقامة وطلبات الهوية الإماراتية والتجديدات وتجهيز المستندات المطلوبة.',
  'Government Transaction Processing': 'تخليص المعاملات الحكومية',
  'Processing and follow-up support for government service requests, submissions, and official transactions.': 'إنجاز ومتابعة طلبات الخدمات الحكومية والتقديمات والمعاملات الرسمية.',
  'Document guidance and application support for personal and corporate bank account opening requirements.': 'إرشاد مستندي ودعم للطلبات الخاصة بفتح الحسابات البنكية الشخصية وحسابات الشركات.',
  'Tenancy Contract Attestation': 'تصديق عقود الإيجار',
  'Support for tenancy contract attestation and related property document procedures.': 'دعم في تصديق عقود الإيجار والإجراءات المرتبطة بمستندات العقارات.',
  'Corporate Tax': 'ضريبة الشركات',
  'Guidance for companies preparing for corporate tax requirements, registration steps, and compliance-minded organization.': 'إرشاد للشركات في متطلبات ضريبة الشركات وخطوات التسجيل والتنظيم المتوافق مع الالتزامات.',
  'Insurance Services': 'خدمات التأمين',
  'Assistance identifying insurance service pathways that help protect people, assets, operations, and continuity.': 'مساعدة في تحديد مسارات التأمين المناسبة لحماية الأفراد والأصول والعمليات واستمرارية الأعمال.',
  'Marketing support for service promotion, business messaging, campaign planning, and visibility across UAE audiences.': 'دعم تسويقي لترويج الخدمات وصياغة الرسائل التجارية وتخطيط الحملات وتعزيز الظهور أمام جمهور الإمارات.',
  'Social Media & Website Services': 'خدمات وسائل التواصل والمواقع',
  'Support for creating new social media accounts, setting up business profiles, preparing online pages, and coordinating website services.': 'دعم لإنشاء حسابات تواصل اجتماعي جديدة وإعداد الملفات التجارية وتجهيز الصفحات الرقمية وتنسيق خدمات المواقع.',
  'Need direction?': 'تحتاج إلى توجيه؟',
  'We can help you choose the right service.': 'نساعدك في اختيار الخدمة المناسبة.',
  'Request Consultation': 'اطلب استشارة',
  'Let’s discuss your next business step in the UAE.': 'لنتحدث عن خطوتك التالية في الإمارات.',
  'Reach us directly for business setup, typing services, visas, Emirates ID, government transactions, tax, insurance, marketing, social media, websites, or document support.': 'تواصل معنا مباشرة لخدمات تأسيس الأعمال والطباعة والتأشيرات والهوية الإماراتية والمعاملات الحكومية والضرائب والتأمين والتسويق ووسائل التواصل والمواقع ودعم المستندات.',
  'Direct Contact': 'تواصل مباشر',
  'Arez Businessmen Services': 'أرز لخدمات رجال الأعمال',
  'Phone': 'الهاتف',
  'Email': 'البريد الإلكتروني',
  'Working Hours': 'ساعات العمل',
  'Monday to Friday, 9 AM to 9 PM': 'من الاثنين إلى الجمعة، \u20669 AM\u2069 إلى \u20669 PM\u2069',
  'Working Hours: Monday to Friday, 9 AM to 9 PM': 'ساعات العمل: من الاثنين إلى الجمعة، \u20669 AM\u2069 إلى \u20669 PM\u2069',
  'Message us now': 'راسلنا الآن',
  'Name': 'الاسم',
  'Phone Number': 'رقم الهاتف',
  'Service Needed': 'الخدمة المطلوبة',
  'Select a service': 'اختر الخدمة',
  'Other': 'اخرى',
  'Message': 'الرسالة',
  'Send Message': 'إرسال الرسالة'
};

function applyLanguage(lang) {
  const isArabic = lang === 'ar';
  document.documentElement.lang = isArabic ? 'ar' : 'en';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic && translations[document.title] ? translations[document.title] : (document.body.dataset.originalTitle || document.title);
  if (!document.body.dataset.originalTitle) document.body.dataset.originalTitle = document.title;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'SVG'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!node.parentElement.dataset.originalText) {
      node.parentElement.dataset.originalText = node.nodeValue;
    }
    const original = node.parentElement.dataset.originalText;
    const trimmed = original.trim();
    if (isArabic && translations[trimmed]) {
      node.nodeValue = original.replace(trimmed, translations[trimmed]);
    } else {
      node.nodeValue = original;
    }
  });

  document.querySelectorAll('.language-toggle span').forEach((span) => {
    span.textContent = isArabic ? 'English' : 'العربية';
  });
}

if (!document.body.dataset.originalTitle) {
  document.body.dataset.originalTitle = document.title;
}

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (languageToggle) {
  const savedLanguage = localStorage.getItem('siteLanguage') || 'en';
  applyLanguage(savedLanguage);
  languageToggle.addEventListener('click', () => {
    const nextLanguage = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('siteLanguage', nextLanguage);
    applyLanguage(nextLanguage);
  });
} else {
  applyLanguage(localStorage.getItem('siteLanguage') || 'en');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
