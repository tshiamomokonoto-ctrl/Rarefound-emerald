from pathlib import Path

from PIL import Image


PUBLIC = Path("client/public/images")
TASKS = [
    (PUBLIC / "method-hero-grid.png", PUBLIC / "method-hero-grid.webp", 82),
    (PUBLIC / "rarefound-logo.png", PUBLIC / "rarefound-logo.webp", 90),
    (PUBLIC / "modules/module-01.png", PUBLIC / "modules/module-01.webp", 88),
    (PUBLIC / "modules/module-03.png", PUBLIC / "modules/module-03.webp", 88),
    (PUBLIC / "modules/module-04.png", PUBLIC / "modules/module-04.webp", 88),
    (PUBLIC / "modules/module-10.jpg", PUBLIC / "modules/module-10.webp", 88),
]


def optimize(source: Path, destination: Path, quality: int) -> None:
    with Image.open(source) as image:
        if image.mode not in {"RGB", "RGBA"}:
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        image.save(destination, "WEBP", quality=quality, method=6)
    print(f"{source.name} -> {destination.name}: {destination.stat().st_size} bytes")


def main() -> None:
    for source, destination, quality in TASKS:
        optimize(source, destination, quality)


if __name__ == "__main__":
    main()
