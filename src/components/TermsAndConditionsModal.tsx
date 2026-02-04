import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsAndConditionsProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function TermsAndConditionsModal({ open, onOpenChange }: TermsAndConditionsProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Terms and Conditions</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6 text-sm">
                        <section>
                            <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground">
                                By accessing and using FinSage AI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">2. Use License</h2>
                            <p className="text-muted-foreground mb-2">
                                Permission is granted to temporarily access the materials (information or software) on FinSage AI for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to reverse engineer any software contained on FinSage AI</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">3. Financial Information Disclaimer</h2>
                            <p className="text-muted-foreground">
                                The financial information, insights, and recommendations provided by FinSage AI are for informational purposes only and should not be considered as financial advice. We are not financial advisors, and you should consult with a qualified financial professional before making any financial decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">4. Data Privacy and Security</h2>
                            <p className="text-muted-foreground mb-2">
                                We take your privacy seriously. By using our service:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                <li>Your financial data is encrypted and stored securely</li>
                                <li>We do not sell your personal information to third parties</li>
                                <li>You can request deletion of your data at any time</li>
                                <li>We use industry-standard security measures to protect your information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">5. AI-Generated Insights</h2>
                            <p className="text-muted-foreground">
                                Our AI-powered insights are generated based on algorithms and machine learning models. While we strive for accuracy, these insights may not always be perfect or suitable for your specific situation. Users should exercise their own judgment when acting on AI-generated recommendations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">6. User Responsibilities</h2>
                            <p className="text-muted-foreground mb-2">
                                As a user of FinSage AI, you agree to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                <li>Provide accurate and truthful information</li>
                                <li>Maintain the confidentiality of your account credentials</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                                <li>Use the service in compliance with all applicable laws and regulations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">7. Limitation of Liability</h2>
                            <p className="text-muted-foreground">
                                In no event shall FinSage AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FinSage AI, even if FinSage AI or an authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">8. Third-Party Services</h2>
                            <p className="text-muted-foreground">
                                Our service may integrate with third-party financial institutions, payment processors, and data providers. We are not responsible for the practices or content of these third-party services. Your use of such services is subject to their respective terms and conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">9. Modifications to Service</h2>
                            <p className="text-muted-foreground">
                                FinSage AI reserves the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. You agree that FinSage AI shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">10. Termination</h2>
                            <p className="text-muted-foreground">
                                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">11. Governing Law</h2>
                            <p className="text-muted-foreground">
                                These terms shall be governed and construed in accordance with the laws of the jurisdiction in which FinSage AI operates, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">12. Changes to Terms</h2>
                            <p className="text-muted-foreground">
                                We reserve the right to update or change our Terms and Conditions at any time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review these Terms and Conditions periodically for any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2">13. Contact Information</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about these Terms and Conditions, please contact us at:
                            </p>
                            <p className="text-muted-foreground mt-2">
                                Email: support@finsage.ai<br />
                                Address: [Your Company Address]
                            </p>
                        </section>

                        <div className="pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
