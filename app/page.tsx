'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
                const response = await fetch('/api/lead', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email, businessType }),
                });

          if (response.ok) {
                    setSubmitted(true);
                    setEmail('');
                    setBusinessType('');
                    setTimeout(() => setSubmitted(false), 3000);
          }
        } catch (error) {
                console.error('Error:', error);
        } finally {
                setLoading(false);
        }
  };

  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
              <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
                      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                                <div className="font-bold text-2xl text-blue-600">APEX</div>div>
                                <div className="hidden md:flex gap-8 text-sm">
                                            <a href="#how" className="text-slate-600 hover:text-slate-900">How It Works</a>a>
                                            <a href="#social-proof" className="text-slate-600 hover:text-slate-900">Why Us</a>a>
                                            <a href="#faq" className="text-slate-600 hover:text-slate-900">FAQ</a>a>
                                </div>div>
                      </div>div>
              </nav>nav>
        
              <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                                          Wholesale Inventory,
                                                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                                            {' '}Zero Middleman
                                                          </span>span>
                                            </h1>h1>
                                            
                                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                                          Real-time access to thousands of wholesale products. Updated daily. Direct pricing. No marketplace fees.
                                            </p>p>
                                
                                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                                          <button
                                                                            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                                                                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg"
                                                                          >
                                                                          See Today's Inventory
                                                                          <ArrowRight size={20} />
                                                          </button>button>
                                            </div>div>
                                
                                            <div className="flex items-center gap-4 text-sm text-slate-600">
                                                          <span>3,500+ sellers already using</span>span>
                                            </div>div>
                                </div>div>
                      
                                <div className="bg-white rounded-2xl shadow-2xl p-8 hidden md:block">
                                            <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center">
                                                          <div className="text-center">
                                                                          <TrendingUp size={64} className="text-blue-600 mx-auto mb-4" />
                                                                          <p className="text-slate-600 font-semibold">Daily Inventory Updates</p>p>
                                                                          <p className="text-2xl font-bold text-slate-900 mt-2">28,000+ Products</p>p>
                                                          </div>div>
                                            </div>div>
                                </div>div>
                      </div>div>
              </section>section>
        
              <section id="social-proof" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-6xl mx-auto">
                                <p className="text-center text-slate-600 text-sm font-semibold uppercase mb-8">Trusted by sellers on</p>p>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
                                  {['Shopify', 'Amazon', 'Etsy', 'WooCommerce'].map((platform) => (
                        <div key={platform} className="text-center">
                                        <div className="bg-slate-100 rounded-lg p-6 mb-2 flex items-center justify-center h-20">
                                                          <span className="font-bold text-slate-700">{platform}</span>span>
                                        </div>div>
                        </div>div>
                      ))}
                                </div>div>
                      
                                <div className="grid md:grid-cols-3 gap-8">
                                  {[
          {
                            quote: "Increased my profit margins by 35% in just 3 months",
                            author: "Sarah Chen",
                            role: "Shopify Store Owner",
                            metric: "+$15K/month revenue"
          },
          {
                            quote: "Finally found reliable wholesale that doesn't require huge MOQ",
                            author: "Marcus Rodriguez",
                            role: "Amazon FBM Seller",
                            metric: "30% faster sourcing"
          },
          {
                            quote: "The daily updates save me hours of research every week",
                            author: "Jessica Kim",
                            role: "Multi-Platform Seller",
                            metric: "5 hours/week saved"
          }
                      ].map((testimonial, i) => (
                                      <div key={i} className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                                                      <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>p>
                                                      <div className="flex items-center gap-3 mb-3">
                                                                        <div className="w-10 h-10 bg-blue-600 rounded-full" />
                                                                        <div>
                                                                                            <p className="font-semibold text-slate-900">{testimonial.author}</p>p>
                                                                                            <p className="text-sm text-slate-600">{testimonial.role}</p>p>
                                                                        </div>div>
                                                      </div>div>
                                                      <p className="text-blue-600 font-semibold text-sm">{testimonial.metric}</p>p>
                                      </div>div>
                                    ))}
                                </div>div>
                      </div>div>
              </section>section>
        
              <section id="how" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                      <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                                            How It Works
                                </h2>h2>
                      
                                <div className="grid md:grid-cols-3 gap-8">
                                  {[
          {
                            step: "1",
                            title: "Sign Up in 30 Seconds",
                            description: "Tell us what you sell and where.",
                            icon: Users
          },
          {
                            step: "2",
                            title: "Get Daily Inventory",
                            description: "Receive updated inventory with new products and pricing.",
                            icon: CheckCircle
          },
          {
                            step: "3",
                            title: "Buy Direct & Scale",
                            description: "Order from suppliers. No fees, no limits, no middleman.",
                            icon: TrendingUp
          }
                      ].map((item, i) => {
                                      const IconComponent = item.icon;
                                      return (
                                                        <div key={i} className="bg-white rounded-xl p-8 shadow-md">
                                                                          <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4">
                                                                            {item.step}
                                                                          </div>div>
                                                                          <div className="flex items-center gap-3 mb-4">
                                                                                              <IconComponent className="text-blue-600" size={28} />
                                                                                              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>h3>
                                                                          </div>div>
                                                                          <p className="text-slate-600">{item.description}</p>p>
                                                        </div>div>
                                                      );
                      })}
                                </div>div>
                      </div>div>
              </section>section>
        
              <section className="py-20 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                                            Why Choose Apex
                                </h2>h2>
                      
                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                  {[
          {
                            title: "No Marketplace Fees",
                            description: "Keep 100% of margins. No 15% commission."
          },
          {
                            title: "Updated Daily",
                            description: "Real inventory changes every 24 hours."
          },
          {
                            title: "Direct Supplier Access",
                            description: "Build relationships with suppliers directly."
          },
          {
                            title: "Transparent Pricing",
                            description: 'use client';
                              
                              import { useState } from 'react';
                                import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';
                                
                                export default function Home() {
                                    const [email, setEmail] = useState('');
                                  const [businessType, setBusinessType] = useState('');
                                  const [submitted, setSubmitted] = useState(false);
                                  const [loading, setLoading] = useState(false);
                                
                                  const handleSubmit = async (e: React.FormEvent) => {
                                        e.preventDefault();
                                    setLoading(true);
                                
                                    try {
                                            const response = await fetch('/api/lead', {
                                                      method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ email, businessType }),
                                  });
                                
                                      if (response.ok) {
                                                setSubmitted(true);
                                        setEmail('');
                                        setBusinessType('');
                                        setTimeout(() => setSubmitted(false), 3000);
                                  }
                                  } catch (error) {
                                          console.error('Error:', error);
                                  } finally {
                                          setLoading(false);
                                  }
                                  };
                                
                                  return (
                                    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                                          <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
                                                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                                                            <div className="font-bold text-2xl text-blue-600">APEX</div>div>
                                                            <div className="hidden md:flex gap-8 text-sm">
                                                                        <a href="#how" className="text-slate-600 hover:text-slate-900">How It Works</a>a>
                                                                        <a href="#social-proof" className="text-slate-600 hover:text-slate-900">Why Us</a>a>
                                                                        <a href="#faq" className="text-slate-600 hover:text-slate-900">FAQ</a>a>
                                                            </div>div>
                                                  </div>div>
                                          </nav>nav>
                                    
                                          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                                                  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                                            <div>
                                                                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                                                                      Wholesale Inventory,
                                                                                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                                                                        {' '}Zero Middleman
                                                                                        </span>span>
                                                                        </h1>h1>
                                                                        
                                                                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                                                                      Real-time access to thousands of wholesale products. Updated daily. Direct pricing. No marketplace fees.
                                                                        </p>p>
                                                            
                                                                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                                                                      <button
                                                                                                        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                                                                                                        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg"
                                                                                                      >
                                                                                                      See Today's Inventory
                                                                                                      <ArrowRight size={20} />
                                                                                        </button>button>
                                                                        </div>div>
                                                            
                                                                        <div className="flex items-center gap-4 text-sm text-slate-600">
                                                                                      <span>3,500+ sellers already using</span>span>
                                                                        </div>div>
                                                            </div>div>
                                                  
                                                            <div className="bg-white rounded-2xl shadow-2xl p-8 hidden md:block">
                                                                        <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center">
                                                                                      <div className="text-center">
                                                                                                      <TrendingUp size={64} className="text-blue-600 mx-auto mb-4" />
                                                                                                      <p className="text-slate-600 font-semibold">Daily Inventory Updates</p>p>
                                                                                                      <p className="text-2xl font-bold text-slate-900 mt-2">28,000+ Products</p>p>
                                                                                        </div>div>
                                                                        </div>div>
                                                            </div>div>
                                                  </div>div>
                                          </section>section>
                                    
                                          <section id="social-proof" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                                                  <div className="max-w-6xl mx-auto">
                                                            <p className="text-center text-slate-600 text-sm font-semibold uppercase mb-8">Trusted by sellers on</p>p>
                                                            
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
                                                              {['Shopify', 'Amazon', 'Etsy', 'WooCommerce'].map((platform) => (
                        <div key={platform} className="text-center">
                                        <div className="bg-slate-100 rounded-lg p-6 mb-2 flex items-center justify-center h-20">
                                                          <span className="font-bold text-slate-700">{platform}</span>span>
                                        </div>div>
                        </div>div>
                      ))}
                                                            </div>div>
                                                  
                                                            <div className="grid md:grid-cols-3 gap-8">
                                                              {[
          {
                            quote: "Increased my profit margins by 35% in just 3 months",
                            author: "Sarah Chen",
                            role: "Shopify Store Owner",
                            metric: "+$15K/month revenue"
          },
          {
                            quote: "Finally found reliable wholesale that doesn't require huge MOQ",
                            author: "Marcus Rodriguez",
                            role: "Amazon FBM Seller",
                            metric: "30% faster sourcing"
          },
          {
                            quote: "The daily updates save me hours of research every week",
                            author: "Jessica Kim",
                            role: "Multi-Platform Seller",
                            metric: "5 hours/week saved"
          }
                      ].map((testimonial, i) => (
                                      <div key={i} className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                                                      <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>p>
                                                      <div className="flex items-center gap-3 mb-3">
                                                                        <div className="w-10 h-10 bg-blue-600 rounded-full" />
                                                                        <div>
                                                                                            <p className="font-semibold text-slate-900">{testimonial.author}</p>p>
                                                                                            <p className="text-sm text-slate-600">{testimonial.role}</p>p>
                                                                        </div>div>
                                                      </div>div>
                                                      <p className="text-blue-600 font-semibold text-sm">{testimonial.metric}</p>p>
                                      </div>div>
                                    ))}
                                                            </div>div>
                                                  </div>div>
                                          </section>section>
                                    
                                          <section id="how" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                                                  <div className="max-w-6xl mx-auto">
                                                            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                                                                        How It Works
                                                            </h2>h2>
                                                  
                                                            <div className="grid md:grid-cols-3 gap-8">
                                                              {[
          {
                            step: "1",
                            title: "Sign Up in 30 Seconds",
                            description: "Tell us what you sell and where.",
                            icon: Users
          },
          {
                            step: "2",
                            title: "Get Daily Inventory",
                            description: "Receive updated inventory with new products and pricing.",
                            icon: CheckCircle
          },
          {
                            step: "3",
                            title: "Buy Direct & Scale",
                            description: "Order from suppliers. No fees, no limits, no middleman.",
                            icon: TrendingUp
          }
                      ].map((item, i) => {
                                      const IconComponent = item.icon;
                                      return (
                                                        <div key={i} className="bg-white rounded-xl p-8 shadow-md">
                                                                          <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4">
                                                                            {item.step}
                                                                          </div>div>
                                                                          <div className="flex items-center gap-3 mb-4">
                                                                                              <IconComponent className="text-blue-600" size={28} />
                                                                                              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>h3>
                                                                          </div>div>
                                                                          <p className="text-slate-600">{item.description}</p>p>
                                                        </div>div>
                                                      );
                      })}
                                                            </div>div>
                                                  </div>div>
                                          </section>section>
                                    
                                          <section className="py-20 px-4 sm:px-6 lg:px-8">
                                                  <div className="max-w-6xl mx-auto">
                                                            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                                                                        Why Choose Apex
                                                            </h2>h2>
                                                  
                                                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                                              {[
          {
                            title: "No Marketplace Fees",
                            description: "Keep 100% of margins. No 15% commission."
          },
          {
                            title: "Updated Daily",
                            description: "Real inventory changes every 24 hours."
          },
          {
                            title: "Direct Supplier Access",
                            description: "Build relationships with suppliers directly."
          },
          {
                            title: "Transparent Pricing",
                            description: "See exact wholesale costs upfront."
          },
          {
                            title: "Curated for Resellers",
                            description: "Products selected for ecommerce sellers."
          },
          {
                            title: "Fastest Sourcing",
                            description: "Find products in minutes."
          }
                      ].map((item, i) => (
                                      <div key={i} className="flex gap-4">
                                                      <Shield className="text-blue-600 flex-shrink-0" size={28} />
                                                      <div>
                                                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>h3>
                                                                        <p className="text-slate-600">{item.description}</p>p>
                                                      </div>div>
                                      </div>div>
                                    ))}
                                                            </div>div>
                                                  </div>div>
                                          </section>section>
                                    
                                          <section id="lead-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
                                                  <div className="max-w-2xl mx-auto">
                                                            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl">
                                                                        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
                                                                                      Get Exclusive Wholesale Deals
                                                                        </h2>h2>
                                                                        <p className="text-center text-slate-600 mb-8">
                                                                                      Join 3,500+ sellers receiving daily inventory updates
                                                                        </p>p>
                                                            
                                                              {submitted ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                        <CheckCircle className="text-green-600 mx-auto mb-3" size={40} />
                                        <h3 className="font-bold text-green-900 mb-2">Check Your Email!</h3>h3>
                                        <p className="text-green-700">
                                                          We're sending you today's inventory list.
                                        </p>p>
                        </div>div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                                              Email Address *
                                                          </label>label>
                                                          <input
                                                                                type="email"
                                                                                placeholder="your@email.com"
                                                                                required
                                                                                value={email}
                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                              />
                                        </div>div>
                        
                                        <div>
                                                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                                              Where Do You Sell? *
                                                          </label>label>
                                                          <select
                                                                                required
                                                                                value={businessType}
                                                                                onChange={(e) => setBusinessType(e.target.value)}
                                                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                              >
                                                                              <option value="">Select a platform...</option>option>
                                                                              <option value="shopify">Shopify Store</option>option>
                                                                              <option value="amazon">Amazon (FBA/FBM)</option>option>
                                                                              <option value="etsy">Etsy Shop</option>option>
                                                                              <option value="woocommerce">WooCommerce</option>option>
                                                                              <option value="tiktok">TikTok Shop</option>option>
                                                                              <option value="marketplace">Multiple Platforms</option>option>
                                                                              <option value="wholesale">Wholesale/Resale</option>option>
                                                                              <option value="other">Other</option>option>
                                                          </select>select>
                                        </div>div>
                        
                                        <button
                                                            type="submit"
                                                            disabled={loading}
                                                            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                                                          >
                                          {loading ? 'Sending...' : 'Send Me Today\'s Inventory'}
                                          {!loading && <ArrowRight size={20} />}
                                        </button>button>
                        
                                        <p className="text-xs text-center text-slate-500 mt-4">
                                                          We update inventory daily. Unsubscribe anytime. No spam, ever.
                                        </p>p>
                        </form>form>
                                                                        )}
                                                            </div>div>
                                                  </div>div>
                                          </section>section>
                                    
                                          <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                                                  <div className="max-w-3xl mx-auto">
                                                            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                                                                        Frequently Asked Questions
                                                            </h2>h2>
                                                  
                                                            <div className="space-y-6">
                                                              {[
          {
                            q: "Why is this better than Alibaba or Faire?",
                            a: "Direct supplier access with daily curated inventory for resellers. No marketplace fees (Faire charges 15%), no MOQ chaos like Alibaba."
          },
          {
                            q: "How fast can I get inventory?",
                            a: "Most suppliers offer dropship or quick fulfillment (48-72 hours). Check the inventory doc for lead times."
          },
          {
                            q: "Do I need to buy in bulk?",
                            a: "Minimums vary by supplier (typically 10-50 units). We show MOQ in the inventory doc."
          },
          {
                            q: "How is this different from drop shipping?",
                            a: "You buy wholesale at true costs. Full control over pricing and fulfillment."
          },
          {
                            q: "What if I have specific product needs?",
                            a: "Reply to your daily email with requests. We source based on seller demand."
          },
          {
                            q: "Is there a subscription fee?",
                            a: "No recurring fees. You only pay suppliers. We make money when you do."
          }
                      ].map((item, i) => (
                                      <details key={i} className="bg-white rounded-lg p-6 cursor-pointer hover:shadow-md transition">
                                                      <summary className="font-bold text-slate-900 flex justify-between items-center">
                                                        {item.q}
                                                                        <span className="text-blue-600">+</span>span>
                                                      </summary>summary>
                                                      <p className="text-slate-600 mt-4">{item.a}</p>p>
                                      </details>details>
                                    ))}
                                                            </div>div>
                                                  </div>div>
                                          </section>section>
                                    
                                          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center">
                                                  <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>h2>
                                                  <p className="text-blue-100 mb-8 text-lg">Our team is here to help.</p>p>
                                                  <a href="mailto:hello@apex-wholesale.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-block">
                                                            Contact Us
                                                  </a>a>
                                          </section>section>
                                    </div>div>
                                  );
                                  }</div>
