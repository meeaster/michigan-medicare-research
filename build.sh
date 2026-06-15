#!/usr/bin/env bash
#
# build.sh — Compile the Michigan Medigap plans document from section files
#
# Usage:
#   ./build.sh              # Build michigan-medigap-plans-2026.md
#   ./build.sh --check      # Verify the build (dry run, no write)
#   ./build.sh --output F   # Write to a custom filename
#
# Section files live in src/ and are concatenated in the order defined below.
# Add or reorder sections by editing the SECTIONS array.
# Comment out a section in SECTIONS to skip it without deleting the file.
#

set -euo pipefail

cd "$(dirname "$0")"

OUTPUT="michigan-medigap-plans-2026.md"
CHECK_ONLY=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --check)
      CHECK_ONLY=1
      shift
      ;;
    --output)
      OUTPUT="$2"
      shift 2
      ;;
    -h|--help)
      sed -n '2,15p' "$0"
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      exit 1
      ;;
  esac
done

# Section files in build order.
# To skip a section, prefix it with "# " in the array.
# To add a new section, add a new line to the array.
SECTIONS=(
  "src/00-header.md"
  "src/01-how-to-read.md"
  "src/02-plan-benefits-matrix.md"
  "src/03-coverage-summary.md"
  "src/04-plan-a.md"
  "src/05-plan-b.md"
  "src/06-plan-c.md"
  "src/07-plan-d.md"
  "src/08-plan-f.md"
  "src/09-plan-f-hd.md"
  "src/10-plan-g.md"
  "src/11-plan-g-hd.md"
  "src/12-plan-k.md"
  "src/13-plan-l.md"
  "src/14-plan-n.md"
  "src/15-cheapest-most-expensive.md"
  "src/16-plan-g-loss-ratio.md"
  "src/17-plan-g-complaint-index.md"
  "src/18-plan-g-rate-increase.md"
  "src/19-am-best-market-share.md"
  "src/20-plan-g-top-pick-1-bcbs-michigan.md"
  "src/21-plan-g-top-pick-2-mutual-of-omaha.md"
  "src/22-plan-g-top-pick-3-aarp-uhc.md"
  "src/23-plan-g-user-experiences.md"
  "src/23b-plan-g-carrier-pros-cons.md"
  "src/24-quick-picks.md"
  "src/25-switching-rights.md"
  "src/26-verify-before-sign.md"
  "src/99-footer.md"
)

# Verify all section files exist before building
missing=0
for section in "${SECTIONS[@]}"; do
  if [[ ! -f "$section" ]]; then
    echo "ERROR: section file missing: $section" >&2
    missing=$((missing + 1))
  fi
done
if [[ $missing -gt 0 ]]; then
  echo "Build aborted: $missing section file(s) missing." >&2
  exit 1
fi

# Build to a temp file, then move into place
tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT

first=1
total_lines=0
for section in "${SECTIONS[@]}"; do
  if [[ $first -eq 0 ]]; then
    # Add horizontal-rule separator between sections (matches original document style)
    printf '\n---\n\n' >> "$tmp"
  fi
  cat "$section" >> "$tmp"
  first=0
  lines=$(wc -l < "$section")
  total_lines=$((total_lines + lines))
done

# Ensure file ends with a single trailing newline
if [[ -s "$tmp" ]]; then
  # Strip any trailing blank lines, then add exactly one
  perl -i -pe 'chomp if eof' "$tmp"
  printf '\n' >> "$tmp"
fi

if [[ $CHECK_ONLY -eq 1 ]]; then
  echo "Build check OK: $OUTPUT would be $(wc -l < "$tmp") lines from ${#SECTIONS[@]} sections"
  echo "  Total source lines: $total_lines"
  exit 0
fi

mv "$tmp" "$OUTPUT"

result_lines=$(wc -l < "$OUTPUT")
result_bytes=$(wc -c < "$OUTPUT")
echo "Built $OUTPUT"
echo "  Sections:    ${#SECTIONS[@]}"
echo "  Source:      $total_lines lines"
echo "  Output:      $result_lines lines, $result_bytes bytes"
