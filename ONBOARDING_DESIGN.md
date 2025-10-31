# Hair Photo Upload Onboarding - Design Specifications

## Common UI Component Names for Design Research

When searching for design inspiration on UI/UX sites (Dribbble, Behance, Mobbin, etc.), use these component names:

- **Stepper / Progress Indicator / Multi-Step Form**
- **Wizard Flow / Step-by-Step Onboarding**
- **Camera Overlay / AR Camera Guide**
- **Photo Capture Interface / Camera Viewfinder**
- **Image Upload Tutorial / Photo Guidelines**
- **Consent Modal / Privacy Dialog**
- **Onboarding Cards / Walkthrough Slides**
- **Animation Tutorial / Lottie Animations**
- **Focus Ring / Camera Frame Indicator**
- **Angle Guide / Position Overlay**
- **Progress Bar / Step Navigation**
- **Visual Instructions / Icon-based Tutorial**
- **Before/After Slider / Comparison View**
- **Checklist / Requirements List**
- **Permission Request / Access Modal**
- **Success State / Completion Screen**
- **Tooltip / Contextual Help**
- **AR Overlay / Live Feedback Indicator**

---

## Onboarding Flow Overview

The hair photo upload onboarding consists of 5 main phases:

1. **Welcome & Introduction**
2. **Photo Requirements Tutorial**
3. **Privacy & Consent**
4. **Guided Photo Capture (5 angles)**
5. **Review & Completion**

---

## Phase 1: Welcome & Introduction

### Screen: Welcome
**Purpose**: Set expectations and explain the process

**Components**:
- Hero image/illustration (person with healthy hair)
- Welcome title: "Let's Capture Your Hair Journey"
- Brief description: "We'll guide you through taking 5 photos from different angles"
- Estimated time: "Takes about 2-3 minutes"
- Primary CTA button: "Get Started"
- Secondary link: "Why do we need photos?"

**Visual Style**:
- Warm, welcoming colors
- Confident, professional tone
- Minimalist design with clear hierarchy

---

## Phase 2: Photo Requirements Tutorial

### Screen: Tutorial Overview
**Purpose**: Teach users how to take quality photos

**Components**:
- Step indicator (Step 1 of 3)
- Large animated illustration or video
- Swipeable cards or vertical scroll

**Tutorial Cards**:

#### Card 1: Lighting & Background
- **Icon**: Light bulb or sun
- **Title**: "Find Good Lighting"
- **Body**:
  - Use natural daylight or bright artificial light
  - Avoid shadows on your hair
  - Stand in front of a plain, light-colored wall
  - Turn on flash or use additional light sources
- **Visual**: Comparison images (good vs. bad lighting examples)

#### Card 2: Distance & Focus
- **Icon**: Ruler or target/focus ring
- **Title**: "Get the Right Distance"
- **Body**:
  - Hold phone 50-60 cm (1.5-2 feet) from your head
  - Wait for the focus ring to appear
  - Keep the device steady
  - Ensure hair is clearly visible
- **Visual**: Side-view silhouette showing phone distance from head
- **Interactive element**: Animated phone showing optimal distance

#### Card 3: 5 Required Angles
- **Icon**: Compass or rotation arrows
- **Title**: "We Need 5 Angles"
- **Body**: Brief overview of angles needed
- **Visual**: 5 small preview images showing:
  1. Front (face visible)
  2. Top (looking down at crown)
  3. Left side (profile)
  4. Right side (profile)
  5. Back (back of head)
- **Detail**: "Don't worry, we'll guide you through each one"

**Navigation**:
- Swipe indicators (dots)
- "Next" / "Previous" buttons
- "Skip Tutorial" option (with warning)
- Primary CTA: "I'm Ready to Start"

---

## Phase 3: Privacy & Consent

### Screen: Privacy & Consent
**Purpose**: Obtain explicit consent and build trust

**Components**:
- Lock/shield icon (trust signal)
- Clear heading: "Your Privacy Matters"
- Consent card with sections:

#### How We Use Your Photos
- Bullet points:
  - ✓ Analyze hair health and density
  - ✓ Track your progress over time
  - ✓ Provide personalized recommendations
  - ✗ Never shared with third parties
  - ✗ Not used for marketing

#### Security Features
- End-to-end encryption
- Secure cloud storage
- HIPAA/GDPR compliant
- Face blurring option available

#### Your Rights
- View your photos anytime
- Download your data
- Delete photos permanently
- Withdraw consent

**Interactive Elements**:
- Checkbox: "I understand and agree to the photo usage terms"
- Link: "Read full privacy policy"
- Toggle: "Blur my face in photos" (optional)

**Navigation**:
- Primary CTA: "I Consent & Continue" (disabled until checkbox checked)
- Secondary link: "Learn more about data protection"

---

## Phase 4: Guided Photo Capture

### Screen Template: Photo Capture (repeated for each angle)

**Purpose**: Guide user to capture each required angle with real-time feedback

**Header Components**:
- Progress indicator: "Photo 1 of 5: Front View"
- Back button
- Help icon (shows requirements again)

**Camera Interface**:
- Full-screen camera view
- AR overlay with guide frame (optional)
- Semi-transparent example silhouette showing position
- Live feedback indicators

**Real-time Feedback Elements**:

#### Quality Checklist (floating panel):
```
Distance: ✓ Perfect
Lighting: ⚠ Add more light
Focus: ✓ Clear
Angle: ✗ Tilt phone up slightly
Background: ✓ Good
```

#### Visual Guides:
- Focus ring (green when good, yellow when adjusting, red when poor)
- Grid lines (rule of thirds)
- Alignment circle for head position
- Distance indicator (moves closer/farther)

**Contextual Instructions** (at top of screen):
- Dynamic text changes based on angle
- Example: "Point camera at your face, keep 2 feet away"
- Auto-dismisses when requirements met

**Capture Controls**:
- Large circular shutter button (center bottom)
  - Green when all requirements met
  - Gray/disabled when requirements not met
- Auto-capture toggle: "Auto-take when ready"
- Gallery icon: "Use existing photo"

---

### Individual Angle Screens

#### Photo 1: Front View
**Instructions**:
- "Face the camera straight on"
- "Keep phone at eye level, 2 feet away"
- "Ensure your hair and forehead are visible"

**AR Overlay**: Front-facing head outline with hair visible

**Tips**:
- Remove hat or hair accessories
- Hair can be up or down
- Neutral expression

---

#### Photo 2: Top View
**Instructions**:
- "Tilt your head down"
- "Camera should look down at your crown"
- "Show the top of your head"

**AR Overlay**: Top-down head outline showing crown area

**Tips**:
- Ask someone to help, or
- Hold phone above and angle down
- Show scalp if possible

**Helper Animation**: Short clip showing person tilting head forward

---

#### Photo 3: Left Side Profile
**Instructions**:
- "Turn your head to show left side"
- "Camera should see your profile"
- "Hair from temple to neck visible"

**AR Overlay**: Side-view head outline (left profile)

**Tips**:
- Stand sideways to a mirror
- Use mirror mode to check position

---

#### Photo 4: Right Side Profile
**Instructions**:
- "Turn your head to show right side"
- "Camera should see your profile"
- "Hair from temple to neck visible"

**AR Overlay**: Side-view head outline (right profile)

**Tips**: (same as left side)

---

#### Photo 5: Back View
**Instructions**:
- "Show the back of your head"
- "Tilt head forward and look behind, or use a mirror"
- "Capture from neck to crown"

**AR Overlay**: Back-view head outline

**Tips**:
- Use a mirror in front of you
- Ask someone to help
- Or hold phone behind and up

**Helper Animation**: Person using front camera with mirror technique

---

### Screen: Photo Review (after each capture)
**Purpose**: Let user confirm or retake

**Components**:
- Large preview of just-taken photo
- Quality indicators:
  - ✓ Good lighting
  - ✓ In focus
  - ✓ Correct angle
- Two options:
  - Primary CTA: "Looks Good, Continue" → next angle
  - Secondary: "Retake Photo" → back to camera

---

## Phase 5: Review & Completion

### Screen: All Photos Review
**Purpose**: Final review before submission

**Components**:
- Grid/carousel showing all 5 photos
- Each photo labeled (Front, Top, Left, Right, Back)
- Tap photo to view full-screen
- "Retake" button on each photo thumbnail
- Quality summary:
  - "5 of 5 photos captured"
  - "All photos meet quality standards ✓"

**Navigation**:
- Primary CTA: "Submit Photos"
- Secondary: "Retake Any Photo"

---

### Screen: Success
**Purpose**: Confirm completion and set next expectations

**Components**:
- Success animation (checkmark, confetti)
- Heading: "Photos Submitted Successfully!"
- Body text:
  - "Your hair photos have been securely uploaded"
  - "Our AI is analyzing your photos"
  - "Results will be ready in 2-3 minutes"
- Next steps card:
  - "While you wait, let's complete your profile"
  - Or "View your dashboard"
- Primary CTA: "Continue to Dashboard"

---

## Additional Screens

### Screen: Help / Requirements
**Purpose**: Always accessible help

**Components**:
- List of photo requirements
- Example images (good vs. bad)
- FAQ section
- "Contact Support" option

---

### Screen: Error States

#### Low Light Warning
- Icon: dim light bulb
- Message: "It's a bit dark. Find better lighting for clearer photos."
- Action: "Continue Anyway" / "Find Better Light"

#### Blur Detected
- Icon: unfocused camera
- Message: "Photo is blurry. Hold steady and wait for focus."
- Action: "Retake Photo"

#### Wrong Angle Detected
- Icon: rotation arrows
- Message: "This looks like a [detected angle], but we need [required angle]."
- Action: "Try Again"

#### No Face/Hair Detected
- Icon: question mark
- Message: "We couldn't detect hair in this photo. Please get closer and ensure hair is visible."
- Action: "Retake Photo"

---

## Design Principles

### Visual Design
- **Clean & Minimal**: Avoid clutter, one primary action per screen
- **Trust Signals**: Use blue/green for safety, lock icons for privacy
- **Accessibility**: High contrast, large touch targets (min 44x44pt), clear labels
- **Consistent**: Same color scheme, typography throughout

### Interaction Design
- **Progressive Disclosure**: Show information when needed, not all at once
- **Immediate Feedback**: Real-time indicators for photo quality
- **Forgiving**: Easy to go back, retake, or skip temporarily
- **Encouraging**: Positive reinforcement ("Great job!", progress indicators)

### Animation & Motion
- **Purpose-Driven**: Animations should teach or guide, not just decorate
- **Subtle**: Fade ins, gentle bounces, smooth transitions
- **Performance**: Keep animations under 300ms, 60fps
- **Examples**:
  - Stepper progress fills in
  - Checkmarks animate in when requirements met
  - Gentle shake for errors
  - Phone rotation animation for angle guidance

### Copy & Tone
- **Clear & Concise**: Short sentences, simple words
- **Supportive**: "We'll guide you" not "You must"
- **Professional**: Medical-appropriate language
- **Encouraging**: Acknowledge effort ("Almost there!", "Perfect!")

---

## Technical Implementation Notes

### Camera Features Required
- Access to device camera (front & back)
- Focus lock/tap to focus
- Exposure control
- Flash control
- Grid overlay
- Image quality: minimum 1080p

### AI/ML Features (Optional)
- Face detection for blur face option
- Hair detection to validate photo content
- Lighting quality assessment
- Blur detection
- Angle detection/classification

### Storage & Security
- Encrypt photos at rest and in transit
- Store metadata: timestamp, angle, quality score
- Implement photo deletion API
- Photo retention policy (e.g., 7 years for medical)

### Accessibility Requirements
- VoiceOver/TalkBack support for all screens
- Camera instructions read aloud
- Alternative: upload from gallery
- High contrast mode support
- Text scaling support

---

## Example Apps Reference

**Hair-specific**:
- Hair Snap: Multiple angle photo upload with sample images
- Hairly: Angle tagging (left, right, top) for progress tracking
- iHairium: B2B AI scanning with 3-5 photos and on-screen guides

**Photo Quality Guidance**:
- SkinVision: 10-20cm distance, auto-capture when "Focused/Detected/Clear"
- AR makeup apps: Live overlay showing ideal position

---

## Assets Needed

### Illustrations
- Welcome hero image
- Good vs. bad lighting examples
- Distance demonstration (side view silhouette)
- 5 angle example photos (with diverse models)

### Icons
- Light bulb (lighting)
- Ruler/target (distance)
- Compass (angles)
- Lock/shield (privacy)
- Checkmark (success)
- Camera (photo capture)
- Question mark (help)
- Rotation arrows (angle adjustment)

### Animations (Lottie or similar)
- Success celebration
- Phone rotation guidance
- Focus ring pulsing
- Progress bar filling
- Head tilt demonstration (for top view)
- Mirror technique (for back view)

### Photos/Videos
- Real user examples for each angle
- Short tutorial videos (optional)

---

## Success Metrics

### Completion Rate
- % of users who complete all 5 photos
- Average time to completion
- Drop-off points

### Photo Quality
- % of photos that meet quality standards
- Average retakes per angle
- Most problematic angle

### User Feedback
- Post-onboarding survey
- Quality ratings
- Helpfulness of guidance

---

## Future Enhancements

- **3D Head Model**: Use ARKit/ARCore to show exact head position
- **AI Coach**: Real-time voice guidance ("Tilt left a bit", "Perfect!")
- **Social Proof**: "Join 10,000+ patients tracking their hair journey"
- **Gamification**: Badges for completing photos, progress streaks
- **Offline Mode**: Capture photos without internet, sync later
- **Comparison View**: Show previous photos side-by-side during capture
- **Professional Mode**: For dermatologists/clinics to capture standardized photos
