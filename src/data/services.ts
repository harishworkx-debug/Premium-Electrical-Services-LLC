export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  h1: string;
  intro: string;
  problem: string;
  symptoms: string[];
  work: string;
  process: { title: string; detail: string }[];
  considerations: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    short: 'Diagnose and fix electrical problems safely.',
    description:
      'Diagnosis and repair of failing outlets, switches, breakers, and wiring so your home or business stays safe and powered.',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Electrician repairing a circuit breaker panel with colorful wiring',
    icon: 'Wrench',
    h1: 'Electrical Repair in the St. Louis Area',
    intro:
      'When something in your electrical system stops working or behaves unpredictably, it is usually a sign of a deeper issue. We diagnose and repair electrical problems in homes and businesses throughout the greater St. Louis area, from a single dead outlet to a panel that keeps tripping.',
    problem:
      'Electrical problems show up in many ways: outlets that stopped working, breakers that trip repeatedly, lights that flicker, switches that feel warm, or burning smells near a panel. These symptoms rarely resolve themselves and can indicate loose connections, overloaded circuits, or failing components. Ignoring them risks damage to appliances, fire, and shock.',
    symptoms: [
      'Outlets or switches that have stopped working entirely',
      'Breakers that trip repeatedly, especially under the same load',
      'Lights that flicker, dim, or buzz',
      'Switches, outlets, or breakers that feel warm to the touch',
      'A burning or ozone smell near an outlet, switch, or the panel',
      'Sparking or scorch marks on outlets and switch plates',
      'Tingling or a mild shock when touching an appliance',
    ],
    work:
      'We isolate the source of the problem, explain what we find in plain language, and complete the repair using code-compliant materials. Repairs can include replacing damaged wiring, swapping failing breakers, tightening loose connections, replacing worn outlets or switches, and correcting overloaded circuits. We test the repair under load before we consider the job done.',
    process: [
      { title: 'Describe the symptom', detail: 'Call us and tell us what you are seeing, when it happens, and which circuits or devices are affected. We will tell you whether it sounds urgent.' },
      { title: 'On-site diagnosis', detail: 'We trace the symptom to its source using testing equipment, inspecting wiring, devices, and the panel as needed.' },
      { title: 'Clear explanation', detail: 'We explain what we found, what the repair options are, and what each involves before any work begins.' },
      { title: 'Code-compliant repair', detail: 'We complete the repair using materials and methods that meet current code, then test the circuit under load.' },
    ],
    considerations:
      'Repeated breaker trips or warm switches should not be ignored. If you smell burning or see scorch marks, turn off power to that circuit at the breaker and call us right away. If you are unsure whether a symptom is urgent, call us and describe what you are experiencing — we can help you decide whether to shut off power to a circuit before we arrive.',
    faqs: [
      {
        q: 'My breaker keeps tripping. Should I just keep resetting it?',
        a: 'No. A breaker that trips repeatedly is doing its job by protecting the circuit. Repeated tripping usually means an overload or a fault that needs repair. Call us to discuss the symptoms.',
      },
      {
        q: 'An outlet stopped working but the breaker is on. What could it be?',
        a: 'Common causes include a tripped GFCI outlet upstream, a loose connection, or a failed back-stabbed wire. We can diagnose it over the phone and schedule a repair.',
      },
      {
        q: 'Do you repair electrical problems in commercial buildings?',
        a: 'Yes. We handle both residential and commercial electrical repairs. Call us to describe your building and the issue.',
      },
    ],
    relatedSlugs: ['electrical-troubleshooting', 'circuit-breaker-services', 'outlet-switch-installation'],
    benefits: [
      'Restores safe, reliable power to affected circuits',
      'Prevents minor issues from becoming fire hazards',
      'Protects appliances and electronics from voltage problems',
      'Brings aging wiring and devices closer to current code',
    ],
  },
  {
    slug: 'electrical-troubleshooting',
    name: 'Electrical Troubleshooting',
    short: 'Find the root cause of confusing electrical issues.',
    description:
      'Systematic diagnosis of flickering lights, dead circuits, and unexplained electrical behavior in residential and commercial properties.',
    image:
      'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Electrician using a multimeter to troubleshoot an industrial control panel',
    icon: 'Search',
    h1: 'Electrical Troubleshooting in the St. Louis Area',
    intro:
      'Not every electrical problem has an obvious cause. Troubleshooting is the process of tracking a symptom back to its source so the real problem gets fixed instead of just the visible sign. We troubleshoot both residential and commercial electrical systems across the greater St. Louis area.',
    problem:
      'Flickering lights, circuits that work intermittently, outlets that test fine but fail under load, and breakers that trip with no clear pattern are all problems that require methodical diagnosis. Guessing at the cause often leads to replacing parts that were not the issue, which wastes money and leaves the real problem in place.',
    symptoms: [
      'Lights that flicker or dim when an appliance turns on',
      'A circuit that works one day and fails the next',
      'Outlets that test okay but drop voltage under load',
      'Breakers that trip with no consistent pattern',
      'A GFCI outlet that will not stay reset',
      'One room or zone with power issues while the rest works',
    ],
    work:
      'We use testing equipment — multimeters, clamp meters, and circuit tracers — to follow the problem through your wiring, panel, and devices. Once the source is identified, we explain the findings and recommend a repair. Troubleshooting commonly reveals loose neutral connections, failing GFCIs, overloaded circuits, back-stabbed wires that have come loose, or damaged conductors hidden behind walls.',
    process: [
      { title: 'Symptom interview', detail: 'We ask you when the problem happens, what else is running at the time, and whether it has gotten worse. Patterns matter.' },
      { title: 'Load and voltage testing', detail: 'We measure voltage under load at outlets, switches, and the panel to find where the signal degrades.' },
      { title: 'Circuit tracing', detail: 'We trace the affected circuit from device to breaker to find the exact point of failure.' },
      { title: 'Findings and repair plan', detail: 'We explain the root cause and recommend a repair. You decide what to approve before we proceed.' },
    ],
    considerations:
      'Intermittent problems are often worse than they appear because heat builds up at a bad connection over time. A loose neutral can damage electronics and, in severe cases, start a fire. If you notice flickering or intermittent power, call us rather than waiting for a complete failure — the longer a bad connection carries current, the more damage it does.',
    faqs: [
      {
        q: 'Why do my lights flicker when the AC turns on?',
        a: 'Large appliance loads can cause brief voltage dips, but persistent flickering may point to a loose connection or an undersized circuit. Call us so we can determine which.',
      },
      {
        q: 'How long does troubleshooting take?',
        a: 'It depends on the symptom. Some issues are found in minutes; others require tracing multiple circuits. We can give you a better idea once you describe the problem over the phone.',
      },
      {
        q: 'Will I have to pay just to find out what is wrong?',
        a: 'Call us to discuss your situation. We will explain how troubleshooting and any repair work would be handled before we begin.',
      },
    ],
    relatedSlugs: ['electrical-repair', 'circuit-breaker-services', 'electrical-safety-improvements'],
    benefits: [
      'Finds and fixes the root cause, not just the symptom',
      'Avoids replacing parts that were not the problem',
      'Identifies hidden hazards like loose neutrals and damaged conductors',
      'Gives you a clear explanation before any repair work begins',
    ],
  },
  {
    slug: 'electrical-panel-upgrades',
    name: 'Electrical Panel Upgrades',
    short: 'Replace outdated panels and increase capacity.',
    description:
      'Upgrade aging or undersized electrical panels to safely support modern power demands in St. Louis area homes and businesses.',
    image:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Electrician installing a new indoor circuit breaker panel',
    icon: 'LayoutGrid',
    h1: 'Electrical Panel Upgrades in the St. Louis Area',
    intro:
      'Your electrical panel is the heart of your system. If your panel is outdated, damaged, or too small for your current needs, an upgrade improves both safety and capacity. We replace residential and commercial panels throughout the greater St. Louis area with modern, properly sized equipment.',
    problem:
      'Panels installed decades ago were not designed for today’s loads. Signs you may need an upgrade include a panel that is full with no room for new circuits, breakers that trip frequently, a brand with known failure issues, or a panel that is warm, rusted, or emitting a burning smell. Some older panel brands have a documented history of failing to trip when they should, which is a serious fire risk.',
    symptoms: [
      'Your panel is full and you cannot add a new circuit',
      'Breakers trip frequently, especially when multiple devices run',
      'The panel or breakers feel warm, or you smell burning near it',
      'Rust or corrosion visible inside or on the panel',
      'Lights dim or flicker throughout the house when large loads start',
      'Your panel is a brand with known failure issues (call us to check)',
      'You are adding a large load like an EV charger, tankless heater, or AC',
    ],
    work:
      'We remove the old panel and install a modern, properly sized replacement with new breakers, grounding, and labeling. We coordinate the utility connection, ensure the grounding electrode system is correct, and make sure the installation meets current code. The new panel is sized to give you room for future circuits as well as your current needs.',
    process: [
      { title: 'Assessment and sizing', detail: 'We look at your current loads, your panel, and any planned additions to determine the right capacity.' },
      { title: 'Coordination', detail: 'We schedule the swap and, where required, coordinate with the utility for the service connection.' },
      { title: 'Panel replacement', detail: 'We remove the old panel, install the new one, transfer circuits, and re-label everything clearly.' },
      { title: 'Testing and inspection', detail: 'We test every circuit and verify grounding before returning power, and arrange inspection as required.' },
    ],
    considerations:
      'Adding large loads such as an EV charger, tankless water heater, or central AC often requires a panel upgrade first. If you are planning a renovation or an addition, call us to discuss whether your current panel can handle it — upgrading the panel during a remodel is far easier than doing it later. A warm or burning-smelling panel is urgent: turn off the main breaker if you can do so safely and call us immediately.',
    faqs: [
      {
        q: 'How do I know if my panel needs replacing?',
        a: 'Common signs include frequent breaker trips, warm or rusted panel components, a full panel with no room for new circuits, or a panel brand with a history of failures. Call us to discuss what you are seeing.',
      },
      {
        q: 'Will I lose power during the upgrade?',
        a: 'Yes, power is typically off for several hours during a panel swap. We will discuss timing when you call so we can plan around your schedule.',
      },
      {
        q: 'Do you upgrade commercial panels too?',
        a: 'Yes. We handle both residential and commercial panel upgrades. Call us to discuss your building and requirements.',
      },
    ],
    relatedSlugs: ['circuit-breaker-services', 'electrical-safety-improvements', 'electrical-repair'],
    benefits: [
      'Enough capacity for modern appliances and future additions',
      'Room for new circuits like EV chargers or AC without a second upgrade',
      'Removes panels with known failure histories',
      'Proper grounding and labeling for safety and easier maintenance',
    ],
  },
  {
    slug: 'circuit-breaker-services',
    name: 'Circuit Breaker Services',
    short: 'Repair, replace, and add circuit breakers.',
    description:
      'Diagnosis, replacement, and addition of circuit breakers to keep your electrical system protected and up to code.',
    image:
      'https://images.pexels.com/photos/27928761/pexels-photo-27928761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Technician using a drill on an electrical panel during breaker work',
    icon: 'Zap',
    h1: 'Circuit Breaker Services in the St. Louis Area',
    intro:
      'Circuit breakers protect your wiring and devices from overloads and faults. When a breaker fails, wears out, or needs to be added, we handle the service safely and to code. We work on residential and commercial panels throughout the greater St. Louis area.',
    problem:
      'Breakers can fail by tripping constantly, failing to trip when they should, or developing a mushy feel that means they no longer latch properly. Older breaker brands also have known reliability problems that create fire risk. A breaker that does not trip when it should is more dangerous than one that trips too often, because the wire keeps carrying current until it overheates.',
    symptoms: [
      'A breaker trips repeatedly under the same load',
      'A breaker will not stay reset and trips immediately',
      'A breaker feels loose or “mushy” when you flip it',
      'You hear buzzing or humming from the breaker',
      'A breaker is warm or shows heat discoloration',
      'Your panel uses a brand with known failure issues',
    ],
    work:
      'We test the breaker and the circuit it serves, replace failed or recalled breakers with compatible modern units, and add new breakers when your panel has available space. Every replacement is matched to the panel manufacturer’s specifications — we never install a breaker brand that is not listed for your panel.',
    process: [
      { title: 'Identify the breaker', detail: 'We confirm which breaker is causing the problem and which circuit it serves.' },
      { title: 'Test the circuit', detail: 'We check whether the circuit itself has a fault or whether the breaker is the issue.' },
      { title: 'Match the replacement', detail: 'We source a breaker that is listed for your specific panel model — no cross-brand substitutes.' },
      { title: 'Install and verify', detail: 'We install the breaker, test it under load, and confirm it trips correctly.' },
    ],
    considerations:
      'A breaker that will not stay reset should not be forced. If a breaker trips immediately every time you reset it, leave it off and call us, because forcing it can damage the breaker or the panel bus. Never replace a breaker with a higher amperage rating to stop it from tripping — that defeats the protection and can overheat the wire.',
    faqs: [
      {
        q: 'Can I just buy a replacement breaker myself?',
        a: 'Breakers must be matched to your specific panel model. Using the wrong brand or type is a serious fire hazard. We source the correct breaker for your panel and install it to code.',
      },
      {
        q: 'Can you add a breaker for a new circuit?',
        a: 'Yes, if your panel has available space and capacity. Call us to discuss what you want to add.',
      },
    ],
    relatedSlugs: ['electrical-panel-upgrades', 'electrical-repair', 'electrical-troubleshooting'],
    benefits: [
      'Restores proper overload and fault protection',
      'Removes recalled or failure-prone breakers',
      'Correct breaker-to-panel matching for safe operation',
      'Adds capacity for new circuits without a full panel swap',
    ],
  },
  {
    slug: 'residential-wiring',
    name: 'Residential Electrical Wiring',
    short: 'New, replacement, and upgraded home wiring.',
    description:
      'Installation and replacement of residential wiring for remodels, additions, and older homes needing modern, grounded circuits.',
    image:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Exposed residential wiring in wall boxes ready for installation',
    icon: 'Cable',
    h1: 'Residential Electrical Wiring in the St. Louis Area',
    intro:
      'Whether you are remodeling, adding on, or updating an older home, we install and replace residential wiring to meet current code and support the way you actually use power. We work on homes throughout the greater St. Louis area, from historic properties to new construction.',
    problem:
      'Many St. Louis area homes still have wiring that predates modern demands: ungrounded two-wire circuits, aluminum wiring from the 1960s and 70s, or DIY wiring that was never inspected. These systems can be unsafe and often cannot support new appliances or devices. Older wiring also lacks the grounding path that modern surge protectors and sensitive electronics require.',
    symptoms: [
      'Two-prong outlets with no ground path',
      'Aluminum wiring on general lighting and receptacle circuits',
      'Frayed, brittle, or cloth-sheathed insulation on old wiring',
      'Outlets that do not support three-prong plugs safely',
      'Dimming or voltage drop when appliances run',
      'Wiring that was added by a previous owner without a permit',
    ],
    work:
      'We run new circuits, replace aging cable, add grounding, and rewire rooms or whole homes as needed. All work is sized for the intended load and installed to current code. We can do a full rewire or targeted updates — for example, grounding key circuits, replacing a single run of damaged cable, or rewiring just the kitchen during a remodel.',
    process: [
      { title: 'Assessment', detail: 'We look at your existing wiring, grounding, and panel to determine what needs updating and what can stay.' },
      { title: 'Scope and plan', detail: 'We discuss whether you need a full rewire or targeted updates, and plan the work around your living situation.' },
      { title: 'Wiring installation', detail: 'We run new cable, add grounding, and install devices to current code, routing through accessible areas where possible.' },
      { title: 'Testing and labeling', detail: 'We test every circuit, confirm grounding, and label the panel clearly.' },
    ],
    considerations:
      'If you are planning a renovation, involve us early. Wiring is much easier to run before walls are closed, and planning circuits around how you will use each space prevents costly changes later. If you have aluminum wiring, do not ignore it — the connections at outlets and switches are where problems develop, and there are proven repair methods short of a full rewire.',
    faqs: [
      {
        q: 'Does my older home need a full rewire?',
        a: 'Not always. Some homes need only partial updates, such as grounding key circuits or replacing damaged cable. Call us to discuss your home and we can talk through options.',
      },
      {
        q: 'I have aluminum wiring. Is that dangerous?',
        a: 'Aluminum wiring from certain years has a higher risk of connection failures. We can inspect your connections and discuss options. Call us to learn more.',
      },
    ],
    relatedSlugs: ['electrical-panel-upgrades', 'lighting-installation', 'home-renovation-electrical'],
    benefits: [
      'Grounded circuits that safely support modern electronics',
      'Removes unsafe aluminum and cloth-sheathed wiring',
      'Right-sized wiring for appliance and device loads',
      'Code-compliant, inspectable installation',
    ],
  },
  {
    slug: 'lighting-installation',
    name: 'Lighting Installation',
    short: 'Install and replace indoor and outdoor lighting.',
    description:
      'Installation of indoor, outdoor, recessed, and decorative lighting for homes and businesses in the St. Louis area.',
    image:
      'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Person installing a new light fixture during home renovation',
    icon: 'Lightbulb',
    h1: 'Lighting Installation in the St. Louis Area',
    intro:
      'From a single fixture replacement to a full lighting layout, we install indoor and outdoor lighting that is safe, properly supported, and wired to code. We handle residential and commercial lighting projects throughout the greater St. Louis area.',
    problem:
      'Common lighting issues include fixtures that are too heavy for the existing box, recessed lights installed without proper clearance from insulation, outdoor fixtures that are not rated for moisture, and switch boxes that are not wired for a dimmer. Many of these problems are hidden until a fixture falls, a ceiling stains, or a breaker trips.',
    symptoms: [
      'A fixture is sagging or pulling away from the ceiling',
      'Recessed lights cycle on and off on their own (thermal cutoff)',
      'Outdoor fixtures corrode or short out after rain',
      'A dimmer switch buzzes or causes lights to flicker',
      'You want to replace a standard light with a ceiling fan',
      'A chandelier or heavy fixture is hung on a standard light box',
    ],
    work:
      'We install and replace ceiling fixtures, recessed lighting, chandeliers, vanity lights, exterior sconces, landscape lighting, and security lighting. We also add or replace switches, including dimmers and smart switches where appropriate. For heavy fixtures and fans, we upgrade the box to one rated for the weight and motion.',
    process: [
      { title: 'Fixture and box check', detail: 'We confirm the existing box can support the fixture and that the wiring is suitable for the load.' },
      { title: 'Box upgrade if needed', detail: 'For fans and heavy fixtures, we install a fan-rated box secured to the framing.' },
      { title: 'Wiring and mounting', detail: 'We wire the fixture correctly, mount it securely, and verify switches and dimmers work.' },
      { title: 'Test and balance', detail: 'For fans, we balance the blades and confirm there is no wobble at speed.' },
    ],
    considerations:
      'Heavy fixtures like ceiling fans and large chandeliers require a box rated for the weight and motion. If you are replacing a standard light with a fan, the box almost always needs to be upgraded. For dimmers, the bulb type matters — LED bulbs need a dimmer rated for LEDs, or they will flicker and fail early. Call us to discuss your fixture before you buy it and we can tell you what to look for.',
    faqs: [
      {
        q: 'Can you install a ceiling fan where there is only a light now?',
        a: 'Often yes, but the existing box usually needs to be replaced with a fan-rated box and the wiring checked. Call us to discuss the location.',
      },
      {
        q: 'Do you install outdoor and security lighting?',
        a: 'Yes. We install exterior and security lighting rated for outdoor use. Call us to describe what you want to add.',
      },
    ],
    relatedSlugs: ['ceiling-fan-installation', 'outlet-switch-installation', 'home-renovation-electrical'],
    benefits: [
      'Fixtures mounted on boxes rated for the weight',
      'Dimmers matched to the correct bulb type',
      'Outdoor fixtures rated for moisture and temperature',
      'Recessed lighting with proper clearance and IC-rated housings',
    ],
  },
  {
    slug: 'outlet-switch-installation',
    name: 'Outlet and Switch Installation',
    short: 'Add, replace, and upgrade outlets and switches.',
    description:
      'Installation of standard, GFCI, AFCI, USB, and smart outlets plus switch replacement and upgrades throughout your property.',
    image:
      'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gloved hands installing a power outlet into a wall',
    icon: 'Plug',
    h1: 'Outlet and Switch Installation in the St. Louis Area',
    intro:
      'Outlets and switches are the parts of your electrical system you touch every day. We install, replace, and upgrade them to improve convenience, safety, and code compliance.',
    problem:
      'Outlets that are loose, discolored, or two-prong (ungrounded) are common in older St. Louis homes. Kitchens, baths, and exterior outlets that lack GFCI protection are a safety issue, and homes without AFCI protection on general circuits do not meet current code.',
    work:
      'We install standard, GFCI, AFCI, tamper-resistant, USB, and smart outlets, and we replace worn or painted-over switches. We also add outlets where you need them and upgrade existing boxes that are too shallow or damaged.',
    considerations:
      'If you have two-prong outlets, the fix depends on whether your wiring has a ground path. We can test and tell you whether grounding is available or whether GFCI protection is the appropriate alternative. Call us to discuss.',
    faqs: [
      {
        q: 'Can you add an outlet where one does not exist?',
        a: 'Usually yes, depending on access to wiring. Call us to describe the location and what you want to power.',
      },
      {
        q: 'What is the difference between GFCI and AFCI?',
        a: 'GFCI protects against shock in wet areas like kitchens and baths. AFCI protects against arcs that can cause fires on general circuits. Current code requires both in different locations. We install both.',
      },
    ],
    relatedSlugs: ['electrical-repair', 'electrical-safety-improvements', 'lighting-installation'],
  },
  {
    slug: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    short: 'Safely mount and wire ceiling fans.',
    description:
      'Installation of ceiling fans with properly rated boxes, balanced mounting, and correct wiring for fan and light control.',
    image:
      'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Living room with a ceiling fan installed',
    icon: 'Fan',
    h1: 'Ceiling Fan Installation in the St. Louis Area',
    intro:
      'A ceiling fan is heavier than a light fixture and moves while it runs, so it needs a box rated for the weight and motion. We install ceiling fans so they are secure, balanced, and wired correctly.',
    problem:
      'The most common issue is a fan mounted to a standard light box that was never rated to hold it. Over time the box can pull loose from the joist, the fan can wobble, and the wiring can fatigue and fail.',
    work:
      'We replace the existing box with a fan-rated box secured to the framing, run the proper wiring for fan and light control, mount and balance the fan, and install the wall controls or remote receiver.',
    considerations:
      'If your existing fan wobbles or the box feels loose, stop using it and call us. A loose fan box can damage the ceiling and create a fire risk.',
    faqs: [
      {
        q: 'Can you install a fan where a light already is?',
        a: 'Usually yes. The box needs to be upgraded to a fan-rated box and the wiring checked. Call us to discuss the location.',
      },
      {
        q: 'Can you control the fan and light separately from the wall?',
        a: 'Yes, depending on the wiring path. We can also install a remote receiver if wall wiring is limited. Call us to discuss your setup.',
      },
    ],
    relatedSlugs: ['lighting-installation', 'outlet-switch-installation', 'electrical-repair'],
  },
  {
    slug: 'electrical-safety-improvements',
    name: 'Electrical Safety Improvements',
    short: 'Grounding, surge protection, and code updates.',
    description:
      'Whole-home surge protection, grounding upgrades, GFCI/AFCI additions, and code-driven safety improvements for older St. Louis homes.',
    image:
      'https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Engineer in safety gear working on an outdoor electrical panel',
    icon: 'ShieldCheck',
    h1: 'Electrical Safety Improvements in the St. Louis Area',
    intro:
      'Older electrical systems can be brought closer to current safety standards without a full rewire. We install targeted safety improvements that reduce fire and shock risk in St. Louis area homes.',
    problem:
      'Many local homes lack whole-home surge protection, grounding, GFCI protection in wet areas, and AFCI protection on general circuits. These features are standard in new construction but missing in older homes.',
    work:
      'We install whole-home surge protectors at the panel, add grounding where wiring supports it, replace standard outlets with GFCI and AFCI devices where required, and correct code issues found during an inspection.',
    considerations:
      'Surge protectors at the panel protect your appliances and electronics from external surges, but they do not replace point-of-use surge strips for sensitive equipment. We can discuss a layered approach.',
    faqs: [
      {
        q: 'What does whole-home surge protection do?',
        a: 'It diverts external voltage surges from the utility or lightning away from your home’s wiring. It protects appliances and electronics that point-of-use strips do not cover.',
      },
      {
        q: 'Can you make my older home fully code compliant?',
        a: 'Partial improvements are usually possible; full compliance in an older home can be a larger project. Call us to discuss what is realistic for your home.',
      },
    ],
    relatedSlugs: ['electrical-panel-upgrades', 'outlet-switch-installation', 'residential-wiring'],
  },
  {
    slug: 'home-renovation-electrical',
    name: 'Home Renovation Electrical Work',
    short: 'Wiring for remodels, additions, and finished basements.',
    description:
      'Electrical rough-in and finish work for kitchen and bath remodels, additions, finished basements, and whole-home renovations.',
    image:
      'https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Kitchen under renovation with tools and ladder on site',
    icon: 'Hammer',
    h1: 'Home Renovation Electrical Work in the St. Louis Area',
    intro:
      'Renovations are the best time to upgrade your electrical system. We handle the rough-in and finish wiring for remodels, additions, and finished basements throughout the St. Louis area.',
    problem:
      'Remodels often uncover undersized wiring, missing grounding, and panels that cannot support the new layout. Planning electrical early prevents change orders, drywall repairs, and circuits that do not match how you use the space.',
    work:
      'We plan and install circuits for new kitchens, baths, basements, and additions, including dedicated appliance circuits, lighting layouts, and switch placement. We coordinate with your contractor and schedule rough-in and finish work around the build.',
    considerations:
      'Bring us in before drywall goes up. Running wiring in open walls is faster, cleaner, and less expensive than cutting into finished walls later.',
    faqs: [
      {
        q: 'Can you work with my general contractor?',
        a: 'Yes. We coordinate with contractors and remodelers on timing, layout, and inspections. Call us to discuss your project.',
      },
      {
        q: 'Do you handle basement finish electrical work?',
        a: 'Yes. We wire finished basements including lighting, outlets, and any dedicated circuits for equipment. Call us to discuss your basement plans.',
      },
    ],
    relatedSlugs: ['residential-wiring', 'lighting-installation', 'electrical-panel-upgrades'],
  },
  {
    slug: 'commercial-electrical-services',
    name: 'Commercial Electrical Services',
    short: 'Electrical service for St. Louis area businesses.',
    description:
      'Electrical installation, repair, and maintenance for offices, retail, restaurants, and light commercial properties in the St. Louis area.',
    image:
      'https://images.pexels.com/photos/8961695/pexels-photo-8961695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Construction worker installing electrical cables on a commercial site',
    icon: 'Building2',
    h1: 'Commercial Electrical Services in the St. Louis Area',
    intro:
      'We provide electrical installation, repair, and maintenance for offices, retail spaces, restaurants, and light commercial properties across the greater St. Louis area.',
    problem:
      'Commercial properties have different requirements than homes: higher circuit counts, three-phase power, lighting that must meet code for occupancy, and equipment that cannot go down during business hours.',
    work:
      'We handle commercial lighting installation and replacement, panel and circuit work, outlet additions, and maintenance repairs. We plan work around your schedule to minimize downtime where possible.',
    considerations:
      'If you are tenant finishing a new space, the electrical layout should match your equipment loads, not just the landlord’s base build-out. Call us before you sign a lease or start a build-out so we can review the electrical scope.',
    faqs: [
      {
        q: 'Do you work after hours for commercial properties?',
        a: 'We can schedule work around your business hours where possible. Call us to discuss your needs and timing.',
      },
      {
        q: 'Can you handle a restaurant or retail build-out?',
        a: 'Yes. We handle electrical work for restaurant and retail build-outs, including lighting, dedicated equipment circuits, and outlet placement. Call us to discuss your space.',
      },
    ],
    relatedSlugs: ['electrical-panel-upgrades', 'lighting-installation', 'electrical-repair'],
  },
];
