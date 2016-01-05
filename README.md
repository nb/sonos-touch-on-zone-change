# sonos-touch-on-zone-change

Very thin wrapper on top of [sonos-discovery](https://github.com/jishi/node-sonos-discovery) to touch a file when the Sonos topology changes. Useful when other processes need to be restarted on topology change (e.g. `airsonos`).

## Usage

```bash
$ npm install -g sonos-touch-on-zone-change
$ sonos-touch-on-zone-change <filename>
```

`sonos-touch-on-zone-change` is a long-running process, it's best used with something like [forever](https://github.com/foreverjs/forever).
