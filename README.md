# Alpine.js Countdown Timer

A simple, reactive countdown timer directive for Alpine.js that provides an easy-to-use countdown functionality with automatic formatting, store management, and smooth transitions.

## Features

- 🕒 Real-time countdown tracking
- 🔢 Automatic zero-padding for time units
- 📦 Alpine store integration
- ✨ Smooth enter/leave transitions
- 🖥️ Minimal configuration required

## Installation

### NPM

```bash
npm install @paintface_danny/alpine-countdown-timer
```

Then import the countdown plugin:

```javascript
import Alpine from 'alpinejs'
import countdown from '@paintface_danny/alpine-countdown-timer'

Alpine.plugin(countdown)
Alpine.start()
```

## Usage

### Basic Example

```html
<div x-countdown="1735689600">
    <div x-show="$store.countdown.isActive"
         x-transition:leave.duration.500ms.opacity>
        <span x-text="$store.countdown.days">00</span> Days
        <span x-text="$store.countdown.hours">00</span> Hours
        <span x-text="$store.countdown.minutes">00</span> Minutes
        <span x-text="$store.countdown.seconds">00</span> Seconds
    </div>
    <div x-show="!$store.countdown.isActive"
         x-transition:enter.delay.500ms.duration.500ms.opacity>
        Countdown completed!
    </div>
</div>
```

### Parameters

- `x-countdown`: Expects a Unix timestamp (seconds since epoch)

## Store Properties

The countdown directive populates an Alpine store with the following properties:

- `isActive`: Boolean indicating if countdown is ongoing
- `days`: Two-digit day count
- `hours`: Two-digit hour count
- `minutes`: Two-digit minute count
- `seconds`: Two-digit second count

## Transition Effects

### Countdown to Completion

- Countdown fades out over 500ms
- Completion message fades in with a 500ms delay
- Smooth, elegant transition between states

## Customization

### Visibility and Transitions

Easily customize transition effects using Alpine's `x-transition` modifiers:
- Adjust duration with `.duration.Xms`
- Add delay with `.delay.Xms`
- Use opacity, scale, or other transition effects
