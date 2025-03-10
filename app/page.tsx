import { Mail, MapPin, Phone, Code, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Bug Fixes <span className="text-emerald-600">&</span> Performance Improvements
                </h1>
                <p className="mt-1 text-sm text-slate-500">Software Engineering Consultancy</p>
              </div>
              <div className="hidden md:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Code className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="mb-8 space-y-6">
              <p className="text-slate-700">
                We help businesses optimize their software, eliminate bugs, and improve performance. Our expert team
                delivers efficient solutions tailored to your specific needs.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                    <Code className="h-4 w-4 text-emerald-600" />
                  </div>
                  <h3 className="font-medium text-slate-900">Bug Fixing</h3>
                  <p className="mt-1 text-sm text-slate-500">Identify and resolve software issues efficiently</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <Zap className="h-4 w-4 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-slate-900">Performance</h3>
                  <p className="mt-1 text-sm text-slate-500">Optimize your applications for speed and efficiency</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100">
                    <Shield className="h-4 w-4 text-sky-600" />
                  </div>
                  <h3 className="font-medium text-slate-900">Security</h3>
                  <p className="mt-1 text-sm text-slate-500">Strengthen your software against vulnerabilities</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-lg bg-slate-50 p-4">
              <h2 className="text-lg font-medium text-slate-900">Contact Us</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span>hello@bugfixes-performance.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span>123 Tech Street, Innovation City</span>
                </div>
              </div>
              <div className="pt-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Schedule a Consultation</Button>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Bug Fixes & Performance Improvements LTD. All rights reserved.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

