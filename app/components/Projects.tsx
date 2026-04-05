'use client';

import { useEffect, useState } from 'react';
import { Github, ExternalLink, Search, Star, GitFork, Filter } from 'lucide-react';
import { personal } from '../data/personal';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  size: number;
  pushed_at: string;
}

const CATEGORY_MAP: Record<string, string[]> = {
  'All': [],
  'Data Analysis': ['data-analysis', 'analytics', 'data-analytics', 'analysis'],
  'Machine Learning': ['machine-learning', 'ml', 'deep-learning', 'nlp', 'ai'],
  'Automation': ['automation', 'etl', 'pipeline', 'script', 'google-apps-script'],
  'Dashboards': ['dashboard', 'power-bi', 'tableau', 'looker', 'bi', 'visualization'],
  'LLM / AI': ['llm', 'rag', 'langchain', 'openai', 'anthropic', 'gpt'],
};

function SkeletonCard() {
  return (
    <div className="glass-card rounded-xl p-5 flex flex-col gap-3">
      <div className="h-4 w-3/4 rounded shimmer bg-bg-border" />
      <div className="h-3 w-full rounded shimmer bg-bg-border" />
      <div className="h-3 w-2/3 rounded shimmer bg-bg-border" />
      <div className="flex gap-2 mt-2">
        <div className="h-5 w-16 rounded shimmer bg-bg-border" />
        <div className="h-5 w-16 rounded shimmer bg-bg-border" />
      </div>
    </div>
  );
}

function formatRepoName(name: string) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function inferLanguageColor(lang: string | null) {
  const map: Record<string, string> = {
    Python: '#3776AB',
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    HTML: '#E34F26',
    CSS: '#1572B6',
    SQL: '#336791',
    Jupyter: '#F37626',
  };
  return lang ? map[lang] || '#1D6FE8' : '#8898AA';
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${personal.githubUsername}/repos?per_page=100&sort=pushed`,
        );
        if (!res.ok) throw new Error('GitHub API error');
        const data: Repo[] = await res.json();
        const filtered = data.filter((r) => !r.fork && r.size > 0);
        setRepos(filtered);
      } catch (e) {
        setError('Unable to load projects. Check back soon.');
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch =
      search === '' ||
      repo.name.toLowerCase().includes(search.toLowerCase()) ||
      (repo.description || '').toLowerCase().includes(search.toLowerCase()) ||
      repo.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesFilter =
      activeFilter === 'All' ||
      CATEGORY_MAP[activeFilter]?.some(
        (tag) =>
          repo.topics.includes(tag) ||
          (repo.language || '').toLowerCase() === tag ||
          repo.name.toLowerCase().includes(tag),
      );

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-line mb-14">
          <span
            className="text-xs font-600 tracking-widest uppercase text-brand"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            03 / Projects
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2
            className="text-3xl sm:text-4xl font-800 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Things I&apos;ve{' '}
            <span className="brand-gradient-text">built & shipped.</span>
          </h2>

          {/* Repo count badge */}
          {!loading && (
            <span
              className="text-xs text-text-muted flex items-center gap-1.5 flex-shrink-0"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Github size={12} />
              {repos.length} repos · auto-synced
            </span>
          )}
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-bg-card border border-bg-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:border-brand/50 transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(CATEGORY_MAP).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-500 border transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-brand text-white border-brand'
                    : 'bg-bg-card border-bg-border text-text-secondary hover:border-brand/40 hover:text-text-primary'
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Error state */}
        {error && (
          <div className="glass-card rounded-xl p-8 text-center">
            <p className="text-text-muted text-sm">{error}</p>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-brand text-sm hover:text-brand-light"
            >
              <Github size={16} />
              View GitHub Profile
            </a>
          </div>
        )}

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : filteredRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="glass-card gradient-border rounded-xl p-5 flex flex-col gap-3 group hover:border-brand/30 hover:shadow-brand transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-sm font-600 text-text-primary group-hover:text-brand-light transition-colors leading-snug"
                      style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
                    >
                      {formatRepoName(repo.name)}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-accent-cyan transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-xs text-text-muted leading-relaxed flex-1 line-clamp-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {repo.description || 'No description available.'}
                  </p>

                  {/* Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded text-[10px] font-500 bg-brand/[0.08] text-accent-blue border border-brand/15"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-bg-border">
                    <div className="flex items-center gap-1.5">
                      {repo.language && (
                        <>
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              background: inferLanguageColor(repo.language),
                            }}
                          />
                          <span
                            className="text-[11px] text-text-muted"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {repo.language}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-text-muted">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={11} />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork size={11} />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* No results */}
        {!loading && !error && filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted text-sm">No projects match your search.</p>
          </div>
        )}

        {/* View more CTA */}
        {!loading && !error && (
          <div className="flex justify-center mt-10">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={16} />
              View all on GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
