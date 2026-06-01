#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const DATA_DIR = path.join(ROOT, 'data');

function loadData(filename) {
    const code = fs.readFileSync(path.join(DATA_DIR, filename), 'utf-8');
    const ctx = {};
    new Function('window', code)(ctx);
    return ctx;
}

const projectsData = loadData('projects.js').projectsData || [];
const timelineData = loadData('timeline.js').timelineData || [];
const skillsData = loadData('skills.js').skillsData || {};
const siteData = loadData('site.js').siteData || {};

const NAV_ITEMS = [
    { href: 'index.html',   label: 'Home' },
    { href: 'about.html',   label: 'About' },
    { href: 'projects.html', label: 'All Projects' },
    { href: 'contact.html', label: 'Contact' }
];

function esc(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function tag(name, attrs, content, selfClose) {
    var s = '<' + name;
    Object.keys(attrs || {}).forEach(function(k) {
        s += ' ' + k + '="' + esc(attrs[k]) + '"';
    });
    if (selfClose) return s + '>';
    s += '>';
    if (content) s += content;
    s += '</' + name + '>';
    return s;
}

function renderNavLinks(root, isMobile) {
    return NAV_ITEMS.map(function(item) {
        var mobileClass = isMobile ? ' block py-2 ' : '';
        return '<a href="' + esc(root + item.href) + '" class="nav-link text-sm font-medium hover:opacity-70 transition-opacity' + mobileClass + '">' + esc(item.label) + '</a>';
    }).join('');
}

function renderHeader(root) {
    return '<header id="site-header" class="flex flex-col">\n' +
        '        <div class="flex items-center justify-between py-4 px-6">\n' +
        '            <div class="flex items-center space-x-2">\n' +
        '                <a href="' + esc(root + 'index.html') + '" class="flex items-center space-x-2">\n' +
        '                    <span class="text-2xl font-serif font-bold tracking-tight site-logo">DM</span>\n' +
        '                    <span class="text-sm font-sans uppercase tracking-wider text-gray-500">Portfolio</span>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <nav class="hidden md:flex space-x-4">\n' +
        '                ' + renderNavLinks(root, false) + '\n' +
        '            </nav>\n' +
        '            <button id="mobile-menu-toggle" class="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-gray-50 relative" aria-label="Toggle navigation menu" aria-expanded="false">\n' +
        '                <svg id="mobile-menu-icon" class="h-5 w-5 text-gray-600 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n' +
        '                    <path d="M4 6h16M4 12h16M4 18h16"></path>\n' +
        '                </svg>\n' +
        '                <svg id="mobile-close-icon" class="h-5 w-5 text-gray-600 absolute transition-transform hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n' +
        '                    <path d="M6 18L18 6M6 6l12 12"></path>\n' +
        '                </svg>\n' +
        '            </button>\n' +
        '        </div>\n' +
        '        <div id="mobile-menu" class="w-full bg-white border-t border-gray-100">\n' +
        '            <div class="px-4 py-3 space-y-2">\n' +
        '                ' + renderNavLinks(root, true) + '\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </header>';
}

function renderProjectCard(project, root) {
    root = root || '';

    var tagsHtml = '';
    if (project.tags && project.tags.length) {
        tagsHtml = '                                <div class="group-tags">\n' +
            project.tags.map(function(t) {
                return '                                    <span class="group-tag">' + esc(t) + '</span>';
            }).join('\n') + '\n' +
            '                                </div>\n';
    }

    var impactHtml = '';
    if (project.impact) {
        impactHtml = '                                <p class="group-impact">\u2192 ' + esc(project.impact) + '</p>\n';
    }

    var roleHtml = '';
    if (project.role) {
        roleHtml = '                                <div class="group-role-wrap">\n' +
            '                                    <p class="group-role">' + esc(project.role) + '</p>\n' +
            '                                </div>\n';
    }

    var summary = project.summary || project.description;

    return '                    <a href="' + esc(root + 'projects/project-' + project.id + '.html') + '" class="block h-full">\n' +
        '                        <div class="group flex flex-col h-full">\n' +
        '                            <img src="' + esc(project.image) + '" alt="' + esc(project.title) + '" class="w-full" loading="lazy">\n' +
        '                            <div class="group-content flex flex-col flex-grow">\n' +
        tagsHtml +
        '                                <h3 class="text-xl font-serif mb-2">' + esc(project.title) + '</h3>\n' +
        '                                <p class="group-summary text-gray-600 mb-3 leading-relaxed">' + esc(summary) + '</p>\n' +
        impactHtml +
        roleHtml +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </a>';
}

function renderTimelineEntry(entry, isLast) {
    var borderClass = isLast ? 'relative pl-8 border-l-2 border-gray-200' : 'relative pl-8 pb-12 border-l-2 border-gray-200';
    var dotClass = entry.dotColor === 'gray' ? 'absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-400' : 'absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black';
    var html = '';
    html += '                <div class="' + borderClass + '">\n';
    html += '                    <div class="' + dotClass + '"></div>\n';
    html += '                    <p class="caption mb-1">' + esc(entry.period) + '</p>\n';
    html += '                    <h3 class="text-xl font-serif font-bold mb-1">' + esc(entry.company) + '</h3>\n';
    if (entry.subtitle) {
        html += '                    <p class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">' + esc(entry.subtitle) + '</p>\n';
    }
    if (entry.details && entry.details.length > 0) {
        var hasMultiple = entry.details.length > 1 || entry.details[0].role;
        if (hasMultiple) {
            html += '                    <div class="space-y-3">\n';
        }
        entry.details.forEach(function(detail) {
            if (hasMultiple) {
                html += '                        <div>\n';
            }
            if (detail.role) {
                html += '                            <p class="text-gray-700 font-medium mb-1">' + esc(detail.role) + '</p>\n';
            }
            if (detail.period) {
                html += '                            <p class="caption mb-0">' + esc(detail.period) + '</p>\n';
            }
            html += '                            <p class="text-gray-600 leading-relaxed">' + esc(detail.description) + '</p>\n';
            if (hasMultiple) {
                html += '                        </div>\n';
            }
        });
        if (hasMultiple) {
            html += '                    </div>\n';
        }
    }
    html += '                </div>\n';
    return html;
}

function renderTimeline(collapsed) {
    var visible = timelineData.filter(function(e) { return !e.collapsed; });
    var hidden = timelineData.filter(function(e) { return e.collapsed; });

    var html = '';
    html += '            <div id="timeline-container" class="space-y-0">\n';
    visible.forEach(function(entry, i) {
        html += renderTimelineEntry(entry, false);
    });

    if (collapsed && hidden.length > 0) {
        html += '                <div id="collapsed-timeline" class="timeline-collapsed collapsed">\n';
        hidden.forEach(function(entry, i) {
            html += renderTimelineEntry(entry, i === hidden.length - 1);
        });
        html += '                </div>\n';
        html += '            </div>\n';
        html += '            <button id="expand-timeline" class="mt-6 inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors btn-primary">\n';
        html += '                <span>Expand Timeline &darr;</span>\n';
        html += '            </button>\n';
        html += '            <button id="collapse-timeline" class="mt-6 hidden inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors btn-primary">\n';
        html += '                <span>Collapse Timeline &uarr;</span>\n';
        html += '            </button>\n';
    } else {
        hidden.forEach(function(entry, i) {
            html += renderTimelineEntry(entry, i === hidden.length - 1 && hidden.length > 0);
        });
        html += '            </div>\n';
    }

    return html;
}

function renderSkills() {
    var html = '';
    html += '            <div class="grid gap-6 md:grid-cols-3">\n';
    Object.keys(skillsData).forEach(function(category) {
        html += '                <div>\n';
        html += '                    <h3 class="text-xl font-serif mb-4">' + esc(category) + '</h3>\n';
        html += '                    <ul class="text-gray-600">\n';
        skillsData[category].forEach(function(skill) {
            html += '                        <li>' + esc(skill) + '</li>\n';
        });
        html += '                    </ul>\n';
        html += '                </div>\n';
    });
    html += '            </div>\n';
    return html;
}

function renderSkillsTags() {
    var all = [];
    Object.keys(skillsData).forEach(function(cat) {
        skillsData[cat].forEach(function(s) {
            all.push(s.replace(/&amp;/g, '&'));
        });
    });
    return all.map(function(skill) {
        return '                <span class="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-full">' + esc(skill) + '</span>';
    }).join('\n');
}

function renderMeta(pageKey) {
    var page = siteData.pages[pageKey] || siteData.pages.index;
    return [
        '    <meta name="description" content="' + esc(page.description) + '">',
        '    <meta property="og:title" content="' + esc(page.title) + '">',
        '    <meta property="og:description" content="' + esc(page.description) + '">',
        '    <meta property="og:type" content="website">',
        '    <meta property="og:url" content="https://malovanyi.com">',
        '    <meta name="twitter:card" content="summary">'
    ].join('\n');
}

function renderJsonLd() {
    var worksFor = [];
    timelineData.forEach(function(entry) {
        var org = {
            '@type': 'Organization',
            'name': entry.company
        };
        worksFor.push(org);
    });

    var allSkills = [];
    Object.keys(skillsData).forEach(function(cat) {
        skillsData[cat].forEach(function(s) {
            allSkills.push(s.replace(/&amp;/g, '&'));
        });
    });

    var ld = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': siteData.name,
        'email': siteData.email,
        'url': 'https://malovanyi.com',
        'sameAs': [siteData.linkedin],
        'jobTitle': 'Product Designer & Mechanical Engineer',
        'description': siteData.tagline,
        'knowsAbout': allSkills,
        'alumniOf': timelineData.map(function(e) { return { '@type': 'OrganizationRole', 'roleName': e.subtitle || '', 'startDate': e.period, 'affiliation': { '@type': 'Organization', 'name': e.company } }; })
    };

    return '    <script type="application/ld+json">\n' + JSON.stringify(ld, null, 4) + '\n    </script>';
}

function processBuildMarkers(html, root, pageKey) {
    root = root || '';

    html = html.replace(/<!-- BUILD_HEADER root="([^"]*)" -->/g, function(match, r) {
        return renderHeader(r || root);
    });

    html = html.replace(/<!-- BUILD_TIMELINE collapsed=(true|false) -->/g, function(match, c) {
        return renderTimeline(c === 'true');
    });

    html = html.replace(/<!-- BUILD_PROJECTS count=(\d+|all) -->/g, function(match, count) {
        var limit = count === 'all' ? projectsData.length : parseInt(count, 10);
        return projectsData.slice(0, limit).map(function(p) {
            return renderProjectCard(p, root);
        }).join('\n');
    });

    html = html.replace(/<!-- BUILD_SKILLS mode=(tags|grid) -->/g, function(match, mode) {
        if (mode === 'tags') {
            return renderSkillsTags();
        }
        return renderSkills();
    });

    html = html.replace(/<!-- BUILD_SITE_DATA field=(\w+) -->/g, function(match, field) {
        return esc(siteData[field] || '');
    });

    html = html.replace(/<!-- BUILD_META page=(\w+) -->/g, function(match, key) {
        return renderMeta(key) + '\n' + renderJsonLd();
    });

    return html;
}

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(function(entry) {
        var fullPath = path.join(dir, entry);
        var stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath, callback);
        } else if (stat.isFile() && entry.endsWith('.html')) {
            callback(fullPath);
        }
    });
}

function build() {
    if (!fs.existsSync(PAGES_DIR)) {
        console.error('Pages directory not found: ' + PAGES_DIR);
        process.exit(1);
    }

    var count = 0;
    walkDir(PAGES_DIR, function(filePath) {
        var relativePath = path.relative(PAGES_DIR, filePath);
        var outputPath = path.join(ROOT, relativePath);

        var html = fs.readFileSync(filePath, 'utf-8');

        var isNested = relativePath.includes('projects' + path.sep) && !relativePath.endsWith('projects.html');
        var root = isNested ? '../' : '';

        var pageKey = 'index';
        if (relativePath.endsWith('about.html')) pageKey = 'about';
        else if (relativePath.endsWith('contact.html')) pageKey = 'contact';
        else if (relativePath.endsWith('projects.html')) pageKey = 'projects';
        else if (isNested) pageKey = 'projects';

        html = processBuildMarkers(html, root, pageKey);

        var outDir = path.dirname(outputPath);
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, html, 'utf-8');
        count++;
        console.log('  built: ' + relativePath);
    });

    console.log('\nBuild complete. ' + count + ' page(s) output.');
}

build();
