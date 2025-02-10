"use client";

import Link from "next/link"
import Script from 'next/script'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function DecoupledTranscript() {
  const [isTranscriptVisible, setIsTranscriptVisible] = useState(true);

  const toggleTranscript = () => {
    setIsTranscriptVisible(!isTranscriptVisible);
  };

  return (
    <div className="min-h-screen bg-white">
      <Script src="https://fast.wistia.com/player.js" async />
      <Script src="https://fast.wistia.com/embed/ozw7h0jrda.js" async type="module" />
      <Script src="https://fast.wistia.net/assets/external/transcript.js" async />

      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            TEDMED
          </Link>
          <nav className="flex gap-6">
            <Link href="/discover" className="text-sm">
              Discover
            </Link>
            <Link href="/get-involved" className="text-sm">
              Get Involved
            </Link>
            <Link href="/donate" className="text-sm">
              Donate
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">• ALL TEDMED CONTENT</div>
        <h1 className="text-3xl font-bold mb-4">How small collective actions create a water secure world</h1>

        <div className="flex gap-2 mb-6">
          <Badge variant="secondary">TALK</Badge>
          <Badge variant="secondary">CLIMATE</Badge>
          <Badge variant="secondary">CEO</Badge>
          <Badge variant="secondary">TED</Badge>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Video Player */}
          <div className="video-container relative aspect-video bg-sage-50 rounded-lg flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:col-span-4">
            <wistia-player media-id="ozw7h0jrda" className="mb-4"></wistia-player>

            <div className="flex items-center justify-between mb-4 w-full">
              <Button variant="outline" size="sm">
                SHARE <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={toggleTranscript}>
                  {isTranscriptVisible ? 'Close Transcript' : 'Show Transcript'}
                </Button>
                <select className="text-sm border rounded p-1">
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* About Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">About This Talk</h2>
          <p className="text-gray-600">
            Water is a central life force for our Earth and its people. But Water Conservationist Jyoti
            Sharma knows that while there is no shortage in discussing water scarcity, there is a lack of clean
            water or a shortage of water altogether...
          </p>
        </section>

        {/* Transcript */}
        <section className="mt-12">
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="transcript" className="border-none">
              <AccordionTrigger className="bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 text-xl font-semibold">
                Transcript
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-4">
              <wistia-transcript className="transcript bg-gray-100 h-[488px] overflow-y-auto bg-sage-50 rounded-lg p-4" media-id="ozw7h0jrda" ></wistia-transcript>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related Content */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Explore more related to...</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <div className="aspect-video bg-sage-50" />
                  <div className="p-4">
                    <h3 className="font-medium text-sm">Using neural dust to eavesdrop on our organs</h3>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">TALK</Badge>
                      <Badge variant="secondary" className="text-xs">TED STAGE</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">FOLLOW ALONG</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600">Newsletter</Link>
                <Link href="#" className="block text-sm text-gray-600">Instagram</Link>
                <Link href="#" className="block text-sm text-gray-600">Facebook</Link>
                <Link href="#" className="block text-sm text-gray-600">X (Twitter)</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">EXPLORE</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600">Search by Tag</Link>
                <Link href="#" className="block text-sm text-gray-600">Playlists</Link>
                <Link href="#" className="block text-sm text-gray-600">Talks</Link>
                <Link href="#" className="block text-sm text-gray-600">People</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">TEDMED</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600">About</Link>
                <Link href="#" className="block text-sm text-gray-600">Donate</Link>
                <Link href="#" className="block text-sm text-gray-600">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

