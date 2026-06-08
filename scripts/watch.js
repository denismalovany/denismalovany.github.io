#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WATCH_DIRS = ['pages', 'data', 'assets', 'scripts'];

function debounce(fn, ms) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    };
}

const build = debounce(() => {
    console.clear();
    const time = new Date().toLocaleTimeString();
    console.log('[watch] rebuilding at ' + time + '...');
    try {
        execSync('node ' + path.join(__dirname, 'build.js'), { stdio: 'inherit' });
        console.log('[watch] build complete\n');
    } catch (e) {
        console.error('[watch] build failed:', e.message, '\n');
    }
}, 200);

WATCH_DIRS.forEach(dir => {
    const full = path.join(__dirname, '..', dir);
    if (!fs.existsSync(full)) {
        console.log('[watch] skipping ' + dir + '/ (not found)');
        return;
    }
    fs.watch(full, { recursive: true }, (event, filename) => {
        if (filename && !filename.startsWith('.')) build();
    });
    console.log('[watch] watching ' + dir + '/');
});

console.log('[watch] ready — waiting for changes...\n');
build();
