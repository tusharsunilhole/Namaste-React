# Pipeline Reconciliation Framework using Databricks & PySpark

## Project Overview

The Pipeline Reconciliation Framework is designed to validate and compare source and target datasets after ETL or data migration processes. The framework helps identify data inconsistencies, missing records, duplicate records, mismatches, and data corruption issues to ensure data quality and integrity.

This project was developed using Databricks, PySpark, Delta Lake, and Databricks SQL.

---

## Business Problem

During ETL migrations and data movement processes, records may be:

- Lost during transformation
- Duplicated accidentally
- Modified incorrectly
- Corrupted during processing
- Missing in target systems

Manual reconciliation is time-consuming and error-prone. This framework automates the validation process and generates reconciliation reports.

---

## Technology Stack

- Databricks
- PySpark
- Delta Lake
- Databricks SQL
- SQL
- CSV Dataset

---

## Dataset Information

**Dataset Name:** Retail Transactions Dataset

**Rows:** 499

**Columns:** 10

Columns:

- CustomerID
- ProductID
- Quantity
- Price
- TransactionDate
- PaymentMethod
- StoreLocation
- ProductCategory
- DiscountAppliedPercent
- TotalAmount

---

## Project Architecture

```text
                    Retail Transactions CSV
                              │
                              ▼
                    Source Delta Table
                              │
                              ▼
                    Target Delta Table
                              │
                              ▼
                 Reconciliation Framework
                              │
      ┌──────────────┬───────────────┬──────────────┐
      ▼              ▼               ▼              ▼
 Row Count      Null Check    Duplicate Check   Sum Check
 Validation     Validation      Validation      Validation

      ┌──────────────┬───────────────┬──────────────┐
      ▼              ▼               ▼
 Missing       Mismatch       Hash Validation
 Records       Records        Validation

                              ▼
                  Reconciliation Summary

                              ▼
                    SQL Dashboard
```

---

## Source Data Ingestion

The source CSV file was uploaded into Databricks and converted into a Delta Table.

Source Table:

```sql
workspace.default.source_transactions_delta
```

---

## Target Data Creation

To simulate real-world ETL issues, modifications were intentionally introduced into the target dataset:

- One record removed
- One record duplicated
- One NULL value introduced
- One amount modified

Target Table:

```sql
workspace.default.target_transactions_delta
```

---

## Validation Checks Implemented

### 1. Row Count Check

Purpose:

Verify whether source and target contain the same number of records.

Logic:

```python
source_count == target_count
```

---

### 2. Amount Sum Check

Purpose:

Verify whether total transaction amounts match between source and target.

Logic:

```python
sum(source.TotalAmount)
==
sum(target.TotalAmount)
```

---

### 3. Null Check

Purpose:

Identify missing values in target data.

Logic:

```python
count_nulls(target)
```

---

### 4. Duplicate Check

Purpose:

Detect duplicate records introduced during migration.

Logic:

```python
count(*) > 1
```

---

### 5. Missing Records Check

Purpose:

Identify records present in source but missing in target.

Logic:

```python
source EXCEPT target
```

---

### 6. Mismatch Records Check

Purpose:

Identify records with changed values.

Logic:

```python
source JOIN target
WHERE values are different
```

---

### 7. Hash Validation Check

Purpose:

Validate row-level data integrity.

Logic:

```python
sha2(concat(all_columns))
```

---

## Reconciliation Results

| Validation Check | Status |
|------------------|---------|
| Row Count Check | PASSED |
| Amount Sum Check | FAILED |
| Null Check | FAILED |
| Duplicate Check | FAILED |
| Missing Records Check | FAILED |
| Mismatch Records Check | FAILED |
| Hash Validation Check | FAILED |

---

## Summary Table

| Check Name | Source Value | Target Value | Status |
|------------|-------------|-------------|---------|
| Row Count Check | 499 | 499 | PASSED |
| Amount Sum Check | 120363.45 | 120868.93 | FAILED |
| Null Check | 0 | 1 | FAILED |
| Duplicate Check | 0 | 1 | FAILED |
| Missing Records Check | 1 | 0 | FAILED |
| Mismatch Records Check | 1 | 0 | FAILED |
| Hash Validation Check | 2 | 0 | FAILED |

---

## Business Benefits

- Automated data validation
- Faster ETL testing
- Reduced manual effort
- Improved data quality
- Early detection of migration issues
- Better governance and compliance

---

## Key Learnings

- Delta Lake Fundamentals
- Data Reconciliation Techniques
- PySpark Transformations
- Databricks SQL
- Data Quality Validation
- ETL Testing Concepts
- Hash-Based Validation

---

## Future Enhancements

- Delta Live Tables Integration
- Real-Time Validation
- Workflow Scheduling
- Email Alerts
- Dashboard Monitoring
- Audit Logging
- Automated Reporting

---

## Conclusion

This project demonstrates an end-to-end data reconciliation framework using Databricks and PySpark. The framework successfully validates source and target datasets using multiple quality checks and generates reconciliation reports to ensure data consistency and integrity across ETL pipelines.
