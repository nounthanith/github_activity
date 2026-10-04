// components/GithubActivity.tsx
import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import type { ThemeInput } from 'react-activity-calendar';
import { ArrowUpRight, Link, Activity } from 'lucide-react';

const USERNAME = 'nounthanith';

// Theme for the calendar squares
const customTheme: ThemeInput = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export default function GithubActivity() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="w-full max-w-5xl mx-auto my-6 p-1">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl">

                {/* Subtle Glow Accent */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

                {/* Header Section */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100">
                            <Link className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-semibold tracking-wide text-zinc-100">
                                    GitHub Contributions
                                </h2>
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                                    <Activity className="h-3 w-3 animate-pulse" /> Live
                                </span>
                            </div>
                            <p className="text-xs text-zinc-400">
                                Public contributions and commit activity
                            </p>
                        </div>
                    </div>

                    <a
                        href={`https://github.com/${USERNAME}`}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                    >
                        <span>@{USERNAME}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                    </a>
                </div>

                {/* Activity Calendar Graph Container */}
                <div className="flex justify-center overflow-x-auto py-2 scrollbar-none text-zinc-300">
                    {mounted ? (
                        <GitHubCalendar
                            username={USERNAME}
                            theme={customTheme}
                            colorScheme="dark"
                            blockSize={13}
                            blockMargin={4}
                            blockRadius={3}
                            fontSize={12}
                            showWeekdayLabels={true}
                            labels={{
                                totalCount: '{{count}} contributions in the last year',
                                legend: { less: 'Less', more: 'More' },
                            }}
                            style={{
                                color: '#9ca3af',
                            }}
                        />
                    ) : (
                        <div className="h-[150px] w-full animate-pulse rounded-lg bg-zinc-900/50" />
                    )}
                </div>

            </div>
        </section>
    );
}