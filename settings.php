<?php

$settings["container_yamls"][] =
    DRUPAL_ROOT . "/sites/development.services.yml";
$settings["cache"]["bins"]["render"] = "cache.backend.null";
$settings["cache"]["bins"]["dynamic_page_cache"] = "cache.backend.null";

// Disable all Drupal cache bins.
$cache_bins = [
    "bootstrap",
    "config",
    "data",
    "default",
    "discovery",
    "discovery_migration",
    "dynamic_page_cache",
    "entity",
    "jsonapi_memory",
    "jsonapi_normalizations",
    "jsonapi_resource_types",
    "menu",
    "migrate",
    "page",
    "render",
    "rest",
    "static",
    "toolbar",
];
foreach ($cache_bins as $bin) {
    $settings["cache"]["bins"][$bin] = "cache.backend.null";
}
?>
