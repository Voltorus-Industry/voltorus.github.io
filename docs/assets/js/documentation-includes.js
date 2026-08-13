document.addEventListener("DOMContentLoaded", async () => {

    const includes = document.querySelectorAll(
        "[data-country-include]"
    );

    await Promise.all(
        [...includes].map(async (element) => {

            const file = element.dataset.countryInclude;

            try {

                const response = await fetch(file);

                if (!response.ok) {
                    throw new Error(
                        `HTTP ${response.status}`
                    );
                }

                element.innerHTML = await response.text();

            } catch (error) {

                console.error(
                    `Unable to load include: ${file}`,
                    error
                );

                element.innerHTML = `
                    <div class="alert alert-danger">
                        Unable to load country information.
                    </div>
                `;

            }

        })

    );

});