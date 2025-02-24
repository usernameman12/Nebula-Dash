export default function loadLevel(id) {
    return fetch('/assets/levels/' + id + '.json').then(res => res.json())
  }
  