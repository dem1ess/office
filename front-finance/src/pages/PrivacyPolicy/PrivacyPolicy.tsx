import {FC} from 'react';

export const PrivacyPolicyPage: FC = () => {
    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div
                    className="relative px-4 py-10 bg-color--primary-bg border-color--border border shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl text-white font-semibold text-center">Privacy Policy</h1>
                        <div className="space-y-6 py-8">
                            <p className="text-white">
                                The tld-bali.com website is owned by TLD, which is the controller for your personal
                                data.<br/>
                                We use this Privacy Policy which sets out how we process information collected by
                                tld-bali.com and the reasons why we should collect certain personal data about you. You
                                should therefore read this Privacy Policy before using tld-bali.com.
                                We care about your personal information and guarantee its privacy and security.
                            </p>
                            <p className="text-white">
                                Personal information we collect:<br/>
                                When you visit tld-bali.com, we automatically collect certain information about your
                                device, including information about your web browser, IP address, time zone, etc. and
                                some of the cookies installed on your device. In addition, when you browse the Site, we
                                collect information about the individual pages or products you view, what sites or
                                search terms directed you to the Site, and how you interact with the Site. We refer to
                                this automatically collected information as "Device Information." In addition, we may
                                collect personal data that you provide to us (including first name, last name, address,
                                payment information, etc.) during registration to enable us to fulfil the agreement.
                            </p>
                            <p className="text-white">
                                Why do we process your data?<br/>
                                Our top priority is customer safety, which is why we must process the minimum amount of
                                user data: exactly as much as is necessary to maintain the site. The information
                                collected automatically is only used to identify potential breaches and to obtain
                                statistical information about the use of the Site. This statistical information is not
                                collected in such a way that a specific user of the system can be identified.
                            </p>
                            <p className="text-white">
                                You may visit the Site without telling us who you are or disclosing any information by
                                which anyone could identify you as a specific person. However, if you want to use
                                certain features of the Site, want to receive our newsletter or other information by
                                filling out a form - you may provide us with personal information such as your email
                                address, first name, last name, residence, organisation, telephone number. You may
                                choose not to provide us with your personal information, but if you do, you may not be
                                able to use certain features of the Site. For example, you may not be able to receive
                                our newsletter or contact us directly through the Site. Users who are unsure what
                                information is required may contact us via support@tld-bali.com.
                            </p>
                            <p className="text-white">
                                Your Rights:<br/>
                                If you are a European resident, you have the following rights relating to your personal
                                data:<br/>
                                The right to receive information.<br/>
                                The right of access.<br/>
                                The right to rectification.<br/>
                                The right to have the data destroyed.<br/>
                                The right to restrict processing.<br/>
                                The right to data portability.<br/>
                                The right to recovery.<br/>
                                Rights in relation to automated decision-making and profiling.
                            </p>
                            <p className="text-white">
                                If you wish to exercise this right, please contact us using the contact details
                                below.<br/>
                                In addition, if you are a European resident, we note that we process your
                                information to fulfil contracts that may be entered into with you (for example, if
                                you place an order through the Site) or otherwise to pursue our legitimate business
                                interests listed above. In addition, please note that your information may be
                                transferred outside of Europe, including Canada and the United States.
                            </p>
                            <p className="text-white">
                                Links to Other Sites:<br/>
                                Our Site may contain links to other sites that we do not own or control. Please be aware
                                that we are not responsible for the privacy policies of such sites or third parties. We
                                encourage you to check when you leave our Site and read the privacy statements of each
                                site that may collect personal information.
                            </p>
                            <p className='text-white'>
                                Information Security:<br/>
                                We protect the information you provide on computer servers in a controlled, secure
                                environment, protected from unauthorised access, use or disclosure. We take reasonable
                                administrative, technical and physical security measures to protect against unauthorised
                                access, use, alteration and disclosure of personal data under its control and custody.
                                However, transmission of data over the Internet or wireless network cannot be
                                guaranteed.<br/>
                                Legal Disclosure:<br/>
                                We will disclose any information we collect, use or receive if required or permitted by
                                law, such as pursuant to a subpoena or similar legal process, and when we believe in
                                good faith that disclosure is necessary to protect our rights, your safety or the safety
                                of others, investigate fraud or respond to a government request.
                            </p>
                            <p className='text-white'>
                                Contact Information:<br/>
                                If you would like to contact us to learn more about this Policy, or would like to
                                contact us about any matter relating to individual rights and your Personal Information,
                                you may send an email to support@tld-bali.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
