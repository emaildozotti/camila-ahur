import { useEffect } from 'react'
import { FadeIn } from './FadeIn'

const COPY = {
  eyebrow: 'próximo passo',
  heading: 'Escolha o melhor horário para',
  headingEm: 'a sua conversa.',
  subtitle: 'A conversa inicial é gratuita e sem compromisso.',
}

export default function CalendarSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "50mins", {origin:"https://app.cal.com"});
      Cal.ns["50mins"]("inline", {
        elementOrSelector:"#my-cal-inline-50mins",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "camila-ahur-nbz8vl/50mins",
      });
      Cal.ns["50mins"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section
      id="agendar"
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="container-ultra flex flex-col items-center gap-10">

        <div className="flex flex-col items-center text-center gap-4">
          <FadeIn>
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}>
              {COPY.eyebrow}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-off-white)',
                fontWeight: 400,
                lineHeight: 1.25,
                maxWidth: '700px',
              }}
            >
              {COPY.heading}{' '}
              <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-sm md:text-base"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-bg-warm)',
                fontWeight: 300,
                opacity: 0.6,
                maxWidth: '420px',
              }}
            >
              {COPY.subtitle}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="w-full">
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: `1px solid color-mix(in srgb, var(--color-secondary) 15%, transparent)`,
              minHeight: '600px',
            }}
          >
            <div
              id="my-cal-inline-50mins"
              style={{ width: '100%', height: '100%', minHeight: '600px', overflow: 'scroll' }}
            />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
